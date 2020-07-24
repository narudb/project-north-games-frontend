import React, { useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { backend } from '../conf';
import globalTheme from '../theme/globalTheme';

const NewsPageContainer = styled.div`
  height: 100vh;
  width: 55vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  border-radius: 5px 5px 0 0;
`;

const ImageNews = styled.img`
  object-fit: cover;
  width: 100%;
  height: 300px;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  margin: 0 0 35px 0;
`;

const TitleOneNews = styled.h2`
  height: 30px;
  max-width: 90%;
  font-weight: 900;
  font-size: 30px;
  line-height: 37px;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.articleWriting};
  margin: 0 0 20px 0;
  text-align: center;
`;

const Intro = styled.p`
  width: 90%;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  text-align: justify;
  color: ${(props) => props.theme.colors.articleWriting};
  margin: 34px 0;
`;

const Article = styled.p`
  width: 90%;
  font-size: 14px;
  line-height: 17px;
  text-align: justify;
  color: ${(props) => props.theme.colors.articleWriting};
`;

export default function NewsPage() {
  const dispatch = useDispatch();
  const oneNews = useSelector((state) => state.oneNewsReducer.oneNews);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`${backend}/news/${id}`).then(({ data }) => {
      dispatch({
        type: 'GET_ONE_NEWS',
        data,
      });
    });
  }, [dispatch, id]);

  return (
    <NewsPageContainer>
      <ImageNews
        src={oneNews.pictureUrl || globalTheme.pictures.event}
        alt={oneNews.title}
      />
      <TitleOneNews>{oneNews.title}</TitleOneNews>
      <Intro>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fugit
        distinctio quia molestias tenetur minima dolor necessitatibus nihil
        commodi perferendis repellat vitae est, accusamus suscipit natus
        exercitationem, quod iusto. Similique.
      </Intro>
      <Article>{oneNews.content}</Article>
    </NewsPageContainer>
  );
}
