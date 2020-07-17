import React from 'react';
import styled from 'styled-components';
import TitleStyle from './ui/Title';
import GroupCard from './GroupCard';

const StyledContainer = styled.div`
  grid-area: asideDown;
  height: 45vh;
  overflow: hidden;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
`;

const GroupContainer = () => {
  return (
    <StyledContainer>
      <TitleStyle>Mes groupes</TitleStyle>
      <GroupCard />
    </StyledContainer>
  );
};

export default GroupContainer;
