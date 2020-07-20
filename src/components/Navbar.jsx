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
  margin-top: 10px;
`;
const Notif = styled.img`
  margin-top: 15px;
  height: 4vh;
  width: 4vw;
`;
const SearchWrapper = styled.div`
  width: 30vw;
  display: flex;
`;

const Div = styled.div`
  display: flex;
  margin-top: 20px;
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
