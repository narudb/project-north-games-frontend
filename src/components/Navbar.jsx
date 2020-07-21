import React from 'react';
import styled from 'styled-components';
import Searchbar from './Searchbar';

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
  margin: 15px 2vw 0 0;
  height: 4vh;
  width: 4vw;
`;
const SearchWrapper = styled.div`
  width: 30vw;
  display: flex;
  align-items: center;
`;
const Avatar = styled.img`
  height: 60px;
  width: 60px;
  border: solid 4px white;
  border-radius: 50%;
  margin: 0 2vw 0 0;
`;
const Username = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  text-transform: uppercase;
  margin-top: 15px;
`;
const UserIdentity = styled.div`
  width: 15vw;
  display: flex;
  justify-content: space-around;
  margin-right: 20px;
`;
const Div = styled.div`
  display: flex;
  margin-top: 20px;
`;
const Navbar = () => {
  return (
    <HeaderWrapper>
      <SearchWrapper>
        <Logo src="/images/north_games_logo.svg" alt=" north game's logo" />
        <Searchbar />
      </SearchWrapper>
      <Div>
        <Notif src="/icons/notif-icon.svg" alt="notification icons" />
        <UserIdentity>
          <Avatar src="/images/placeholder.png" />
          <Username>username</Username>
        </UserIdentity>
      </Div>
    </HeaderWrapper>
  );
};

export default Navbar;
