import React, { useEffect } from 'react';
import axios from 'axios';
// import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export default function NewsPage() {
  const dispatch = useDispatch();
  const oneNews = useSelector((state) => state.newsReducer.oneNews);
  const { id } = useParams();

  const getOneNews = () => {
    axios.get(`/news/${id}`).then(({ data }) => {
      dispatch({
        type: 'GET_ALL',
        data,
      });
    });
  };
  useEffect(() => {
    getOneNews();
  }, [dispatch]);

  return (
    <div>
      <h2>{oneNews.title}</h2>
      <p>{oneNews.author}</p>
      <p>{oneNews.creationDate}</p>
      <img src={oneNews.pictureUrl} alt={oneNews.title} />
      <p>{oneNews.content}</p>
    </div>
  );
}
