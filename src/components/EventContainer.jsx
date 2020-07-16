import React from 'react';
import styled from 'styled-components';
import TitleStyle from './ui/Title';
import EventCard from './EventCard';

const StyledContainer = styled.div`
  border: 1px solid red;
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
