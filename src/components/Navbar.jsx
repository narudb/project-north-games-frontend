import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  height: 15vh;
  border: 1px solid red;
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
const Avatar = styled.img`
  height: 8vh;
  width: 4vw;
  border-radius: 50%;
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
        <input type="text" placeholder="SearchBar's place" />
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
