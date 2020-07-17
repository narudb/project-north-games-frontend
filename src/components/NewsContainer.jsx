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

const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const NewsContainer = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <StyledContainer>
      <TitleWrapper>
        <TitleStyle>Actu à la une </TitleStyle>
        <AddBtn type="submit" value="open" onClick={handleClick}>
          +
        </AddBtn>
      </TitleWrapper>
      <FormNews open={open} />
      <NewsCard />
    </StyledContainer>
  );
};

export default NewsContainer;
