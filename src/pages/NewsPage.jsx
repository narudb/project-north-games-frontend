import React, { useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { backend } from '../conf';
import globalTheme from '../theme/globalTheme';

const NewsPageContainer = styled.div`
  height: 100vh;
  display: grid;
  justify-items: center;
`;

const AuthorPara = styled.p`
  letter-spacing: 0.1rem;
  line-height: 30px;
  font-size: 14px;
`;

const TitleOneNews = styled.h2`
  font-size: 45px;
  font-weight: bold;
  letter-spacing: 0.2em;
  text-align: center;
  line-height: 55px;
`;

const TextPara = styled.p`
  line-height: 30px;
  font-size: 18px;
`;

const ImageNews = styled.img`
  object-fit: cover;
  width: 50vw;
  height: 50vh;
  border-radius: 5px;
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
      <TitleOneNews>{oneNews.title}</TitleOneNews>
      <AuthorPara>
        written by <span>{oneNews.author}</span> on
        {oneNews.creationDate}
      </AuthorPara>
      <ImageNews
        src={oneNews.pictureUrl || globalTheme.pictures.event}
        alt={oneNews.title}
      />
      <TextPara>{oneNews.content}</TextPara>
    </NewsPageContainer>
  );
}
