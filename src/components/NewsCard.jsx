import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { backend } from '../conf';
import StyledLink from './ui/StyledLink';
import globalTheme from '../theme/globalTheme';

const NewsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  height: 30vh;
  justify-content: space-evenly;
  margin-bottom: 40px;
`;

const NewsWrapper = styled.div`
  width: 230px;
  height: 168px;
  background: linear-gradient(
    ${(props) => props.theme.colors.newsCardGradient}
  );
  border-radius: 5px;
  overflow: hidden;
  margin: 10px;
`;

const CardImg = styled.div`
  width: 100%;
  height: 92px;
  background-color: ${(props) => props.theme.colors.primary};
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
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const TextStyle = styled.p`
  font-size: 12px;
  line-height: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const NewsCard = () => {
  const dispatch = useDispatch();
  const newsData = useSelector((state) => state.newsReducer.newsData);

  useEffect(() => {
    axios.get(`${backend}/news`).then(({ data }) => {
      dispatch({
        type: 'GET_ALL_NEWS',
        data,
      });
    });
  }, [dispatch]);
  return (
    <>
      <NewsContainer>
        {newsData
          .map((news) => {
            return (
              <StyledLink to={`/news/${news.id}`} key={news.id}>
                <NewsWrapper>
                  <CardImg>
                    <NewsImg
                      src={news.pictureUrl || globalTheme.pictures.event}
                      alt="news-img"
                    />
                  </CardImg>
                  <TextWrapper>
                    <Title>{news.title}</Title>
                    <TextStyle>{news.contenText}</TextStyle>
                  </TextWrapper>
                </NewsWrapper>
              </StyledLink>
            );
          })
          .slice(0, 3)}
      </NewsContainer>
    </>
  );
};

export default NewsCard;
