import React, { useState, useLayoutEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

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

  useLayoutEffect(() => {
    axios.get('/news').then((res) => {
      setNews(res.data);
    });
  }, []);

  const searchTitle = (needle) => {
    setSearchNewsByTitle(
      news.filter((newsby) => {
        return newsby.title.toLowerCase().includes(needle.toLowerCase());
      })
    );
  };

  return (
    <div>
      <DivInput
        type="text"
        placeholder=""
        onChange={(e) => {
          searchTitle(e.target.value);
        }}
      />

      <div>
        {searchNewsByTitle.map((title) => (
          <p>{title}</p>
        ))}
      </div>
    </div>
  );
}
