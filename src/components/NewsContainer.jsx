import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import TitleStyle from './ui/Title';
import NewsCard from './NewsCard';
import AddBtn from './ui/AddBtn';
import FormNews from './FormNews';

const StyledContainer = styled.div`
  grid-area: news;
  height: 45vh;
  overflow: hidden;
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
  const isLoggedIn = useSelector((state) => state.userReducer.loggedIn);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <StyledContainer>
      <TitleWrapper>
        <TitleStyle>{open ? 'Ajoutes ta news' : 'Actu à la une'}</TitleStyle>
        {isLoggedIn ? (
          <AddBtn type="submit" value="open" onClick={handleClick}>
            {!open ? '+' : '-'}
          </AddBtn>
        ) : null}
      </TitleWrapper>
      {open ? <FormNews /> : <NewsCard />}
    </StyledContainer>
  );
};

export default NewsContainer;
