import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

const NewsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
`;

const NewsWrapper = styled.div`
  width: 230px;
  height: 168px;
  background: linear-gradient(
    ${(props) => props.theme.colors.NewsCardGradient}
  );
  border-radius: 5px;
  overflow: hidden;
  margin-top: 20px;
  margin-right: 20px;
`;

const CardImg = styled.div`
  width: 100%;
  height: 92px;
  background-color: gray;
  overflow: hidden;
`;

const NewsImg = styled.img`
  width: 100%;
`;

const TextWrapper = styled.div`
  padding: 10px 15px;
  color: ${(props) => props.theme.colors.primary};
  text-transform: uppercase;
`;

const Title = styled.h3`
  font-size: 18px;
  line-height: 24px;
`;

const TextStyle = styled.p`
  white-space: nowrap;
  font-size: 12px;
  line-height: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const NewsCard = () => {
  const dispatch = useDispatch();
  const newsData = useSelector((state) => state.newsReducer.newsData);

  useEffect(() => {
    const getAllNews = () => {
      axios.get('/news').then(({ data }) => {
        dispatch({
          type: 'GET_ALL_NEWS',
          data,
        });
      });
    };
    getAllNews();
  }, [dispatch]);
  return (
    <>
      <NewsContainer>
        {newsData
          .map((news) => {
            return (
              <NewsWrapper key={news.id}>
                <CardImg>
                  <NewsImg src={news.pictureUrl} alt="news-img" />
                </CardImg>
                <TextWrapper>
                  <Title>{news.title}</Title>
                  <TextStyle>{news.contenText}</TextStyle>
                </TextWrapper>
              </NewsWrapper>
            );
          })
          .slice(0, 3)}
      </NewsContainer>
    </>
  );
};

export default NewsCard;
