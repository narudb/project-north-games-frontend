import React, { useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { backend } from '../conf';

const NewsPageContainer = styled.div`
  height: 100vh;
  display: grid;
  justify-items: center;
`;

const POneNews = styled.p`
  font-family: ${(props) => props.theme.fonts.primary};
`;

const TitleOneNews = styled.h2`
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 20px;
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
      <POneNews>
        written by
        <span>{oneNews.author} </span>
        {oneNews.creationDate}
      </POneNews>
      <ImageNews src={oneNews.pictureUrl} alt={oneNews.title} />
      <POneNews>{oneNews.content}</POneNews>
    </NewsPageContainer>
  );
}
