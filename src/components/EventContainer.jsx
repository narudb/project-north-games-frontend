import React from 'react';
import styled from 'styled-components';
import TitleStyle from './ui/Title';
import EventCard from './EventCard';

const StyledContainer = styled.div`
  grid-area: events;
  height: 45vh;
  overflow: hidden;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
`;

const EventContainer = () => {
  return (
    <StyledContainer>
      <TitleStyle>Autour de moi</TitleStyle>
      <EventCard />
    </StyledContainer>
  );
};

export default EventContainer;
