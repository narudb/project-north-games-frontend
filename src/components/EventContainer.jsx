import React, { useState } from 'react';
import styled from 'styled-components';
import AddBtn from './ui/AddBtn';
import TitleStyle from './ui/Title';
import EventCard from './EventCard';
import TitleWrapper from './ui/TitleWrapper';
import FormEvent from './FormEvent';

const StyledContainer = styled.div`
  grid-area: events;
  height: 45vh;
  overflow: scroll;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
`;

const EventContainer = () => {
  const [openBtnEvent, setOpenBtnEvent] = useState(false);
  const handleClickEvt = () => {
    setOpenBtnEvent(!openBtnEvent);
  };
  return (
    <StyledContainer>
      <TitleWrapper>
        <TitleStyle>Autour de moi</TitleStyle>
        <AddBtn type="submit" value="open" onClick={handleClickEvt}>
          +
        </AddBtn>
      </TitleWrapper>
      <>
        {openBtnEvent ? (
          <FormEvent
            openBtnEvent={openBtnEvent}
            setOpenBtnEvent={setOpenBtnEvent}
          />
        ) : (
          <EventCard />
        )}
      </>
    </StyledContainer>
  );
};

export default EventContainer;
