import React from 'react';
import styled from 'styled-components';

const AsideWrapper = styled.div`
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
