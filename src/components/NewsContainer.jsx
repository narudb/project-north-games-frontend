import React, { useState } from 'react';
import styled from 'styled-components';
import TitleStyle from './ui/Title';
import NewsCard from './NewsCard';
import AddBtn from './ui/AddBtn';
import FormNews from './FormNews';

const StyledContainer = styled.div`
  grid-area: news;
  height: 45vh;
  overflow: scroll;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
`;

const NewsContainer = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <StyledContainer>
      <TitleStyle>
        Actu à la une{' '}
        <AddBtn type="submit" value="open" onClick={handleClick}>
          +
        </AddBtn>
      </TitleStyle>{' '}
      <FormNews open={open} />
      <NewsCard />
    </StyledContainer>
  );
};

export default NewsContainer;
