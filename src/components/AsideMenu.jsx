import React from 'react';
import styled from 'styled-components';

const AsideWrapper = styled.div`
  border: 1px solid purple;
  padding: 15px;
  grid-area: asideMenu;
`;

const Navbar = () => {
  return (
    <AsideWrapper>
      <p>Aside Menu</p>
    </AsideWrapper>
  );
};

export default Navbar;
