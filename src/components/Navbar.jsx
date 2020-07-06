import React from 'react';
import styled from 'styled-components';
import Searchbar from './Searchbar';

const HeaderWrapper = styled.header`
  height: 15vh;
  border: 1px solid red;
  grid-area: navbar;
`;

const Navbar = () => {
  return (
    <HeaderWrapper>
      <p>Header</p>
      <Searchbar />
    </HeaderWrapper>
  );
};

export default Navbar;
