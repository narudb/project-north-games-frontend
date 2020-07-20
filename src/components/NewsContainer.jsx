import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TitleStyle from './ui/Title';
import NewsCard from './NewsCard';
import AddBtn from './ui/AddBtn';
import FormNews from './FormNews';
import StyledContainer from './ui/StyledContainer';
import TitleWrapper from './ui/TitleWrapper';

const NewsContainer = () => {
  const [open, setOpen] = useState(false);
  const isLoggedIn = useSelector((state) => state.userReducer.loggedIn);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <StyledContainer>
      <TitleWrapper>
        <TitleStyle>Actu à la une </TitleStyle>
        {isLoggedIn ? (
          <AddBtn type="submit" value="open" onClick={handleClick}>
            +
          </AddBtn>
        ) : null}
      </TitleWrapper>
      {open ? <FormNews /> : <NewsCard />}
    </StyledContainer>
  );
};

export default NewsContainer;
