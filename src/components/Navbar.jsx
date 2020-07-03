import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  width: 100vw;
  height: 15vh;
  border: 1px solid red;
`;

const Navbar = () => {
  return (
    <HeaderWrapper>
      <p>Header</p>
    </HeaderWrapper>
  );
};

export default Navbar;
