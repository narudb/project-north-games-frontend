import React, { useState } from 'react';
import styled from 'styled-components';
import AddBtn from './ui/AddBtn';
import TitleStyle from './ui/Title';
import GroupCard from './GroupCard';
import FormGroup from './FormGroup';

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
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <StyledContainer>
      <TitleStyle>{open ? 'Créer ton groupe' : 'Mes groupes'}</TitleStyle>
      <AddBtn type="submit" value="open" onClick={handleClick}>
        +
      </AddBtn>
      {open ? <FormGroup /> : <GroupCard />}
    </StyledContainer>
  );
};

export default GroupContainer;
