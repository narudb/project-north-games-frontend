import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Searchbar from './Searchbar';
import UserIdentity from './UserIdentity';

const HeaderWrapper = styled.header`
  height: 15vh;
  grid-area: navbar;
  display: flex;
  justify-content: space-between;
`;
const Logo = styled.img`
  height: 13vh;
  width: 13vw;
  margin: 10px 0 0 37px;
`;
const Notif = styled.img`
  margin: 15px 0 0 0;
  height: 4vh;
  width: 4vw;
`;
const SearchWrapper = styled.div`
  width: 30vw;
  display: flex;
  align-items: center;
`;
const Div = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
`;

const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.userReducer.loggedIn);

  return (
    <HeaderWrapper>
      <SearchWrapper>
        <Logo src="/images/north_games_logo.svg" alt=" north game's logo" />
        <Searchbar />
      </SearchWrapper>
      {isLoggedIn ? (
        <Div>
          <Notif src="/icons/notif-icon.svg" alt="notification icons" />
          <UserIdentity />
        </Div>
      ) : null}
    </HeaderWrapper>
  );
};

export default Navbar;
