import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  height: 15vh;
  border: 1px solid red;
  grid-area: navbar;
`;

const Navbar = () => {
  return (
    <HeaderWrapper>
      <p>Header</p>
    </HeaderWrapper>
  );
};

export default Navbar;
