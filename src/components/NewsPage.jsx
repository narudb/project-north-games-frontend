import React, { useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const NewsPageContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ImageNews = styled.img`
  object-fit: cover;
  width: 50vw;
  height: 50vh;
`;
export default function NewsPage() {
  const dispatch = useDispatch();
  const oneNews = useSelector((state) => state.oneNewsReducer.oneNews);
  const { id } = useParams();

  const getOneNews = () => {
    axios.get(`/news/${id}`).then(({ data }) => {
      dispatch({
        type: 'GET_ONE_NEWS',
        data,
      });
    });
  };

  useEffect(() => {
    getOneNews();
  }, [dispatch]);

  return (
    <NewsPageContainer>
      <h2>{oneNews.title}</h2>
      <p>
        written by
        <span>{oneNews.author}</span>
        {oneNews.creationDate}
      </p>
      <ImageNews src={oneNews.pictureUrl} alt={oneNews.title} />
      <p>{oneNews.content}</p>
    </NewsPageContainer>
  );
}
