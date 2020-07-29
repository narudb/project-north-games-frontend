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

const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const GroupContainer = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <StyledContainer>
      <TitleWrapper>
        <TitleStyle>{open ? 'Créer ton groupe' : 'Mes groupes'}</TitleStyle>
        <AddBtn type="submit" value="open" onClick={handleClick}>
          {!open ? '+' : '-'}
        </AddBtn>
      </TitleWrapper>
      {open ? <FormGroup /> : <GroupCard />}
    </StyledContainer>
  );
};

export default GroupContainer;
