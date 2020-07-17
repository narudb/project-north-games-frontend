import React from 'react';
import styled from 'styled-components';
import TitleStyle from './ui/Title';
import RoundCard from './RoundCard';

const StyledContainer = styled.div`
  grid-area: asideDown;
  height: 45vh;
  overflow: scroll;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
`;

const NewsContainer = () => {
  return (
    <StyledContainer>
      <TitleStyle>Prochaines parties</TitleStyle>
      <RoundCard />
    </StyledContainer>
  );
};

export default NewsContainer;
