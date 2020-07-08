import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import styled from 'styled-components';
import { useParams } from 'react-router-dom';

export default function NewsPage() {
  const [oneNews, setOneNews] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`/news/${id}`).then((res) => {
      setOneNews(res.data);
    });
  }, []);

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
