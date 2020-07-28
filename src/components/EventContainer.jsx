import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import AddBtn from './ui/AddBtn';
import TitleStyle from './ui/Title';
import EventCard from './EventCard';
import FormEvent from './FormEvent';

const StyledContainer = styled.div`
  grid-area: events;
  height: 45vh;
  overflow: hidden;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
`;

const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const EventContainer = () => {
  const [open, setOpen] = useState(false);
  const isLoggedIn = useSelector((state) => state.userReducer.loggedIn);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <StyledContainer>
      <TitleWrapper>
        <TitleStyle>{open ? 'Créer ton event' : 'Autour de moi'}</TitleStyle>
        {isLoggedIn ? (
          <AddBtn type="submit" value="open" onClick={handleClick}>
            {!open ? '+' : '-'}
          </AddBtn>
        ) : null}
      </TitleWrapper>
      {open ? <FormEvent /> : <EventCard />}
    </StyledContainer>
  );
};

export default EventContainer;
