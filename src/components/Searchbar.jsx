import React, { useState, useEffect, useLayoutEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { backend } from '../conf';

const DivInput = styled.input`
  background-color: ${(props) => props.theme.colors.secondary};
  background-image: url(/icons/search-icon.svg);
  background-repeat: no-repeat;
  background-position: right;
  border-radius: 5px;
  width: 196.34px;
  height: 35px;
`;

export default function Searchbar() {
  const [news, setNews] = useState([]);
  const [searchNewsByTitle, setSearchNewsByTitle] = useState([]);
  const [searchTitle, setSearchTitle] = useState('');

  useLayoutEffect(() => {
    axios.get(`${backend}/news?author=${searchTitle}`).then((res) => {
      setNews(res.data);
    });
  }, [searchTitle]);

  useEffect(() => {
    setSearchNewsByTitle(
      news.filter((byNews) =>
        byNews.title.toLowerCase().includes(searchTitle.toLowerCase())
      )
    );
  }, [searchTitle, news]);

  return (
    <div>
      <DivInput
        type="text"
        onChange={(e) => {
          setSearchTitle(e.target.value);
        }}
      />

      <div>
        {searchNewsByTitle.map((oneNews) => (
          <p key={oneNews.id}>{oneNews.title}</p>
        ))}
      </div>
    </div>
  );
}
