import React, { useState } from 'react';
import TitleStyle from './ui/Title';
import NewsCard from './NewsCard';
import AddBtn from './ui/AddBtn';
import FormNews from './FormNews';
import StyledContainer from './ui/StyledContainer';
import TitleWrapper from './ui/TitleWrapper';

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
      <FormNews open={open} setOpen={setOpen} />
      <NewsCard />
    </StyledContainer>
  );
};

export default NewsContainer;
