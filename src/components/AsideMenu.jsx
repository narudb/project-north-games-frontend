import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const AsideWrapper = styled.div`
  padding: 15px;
  height: 80vh;
  grid-area: asideMenu;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
`;

const activeClassName = 'nav-item-active';

const StyledLink = styled(NavLink).attrs({ activeClassName })`
  opacity: 0.4;

  &.${activeClassName} {
    opacity: 1;
  }
`;

const NavLinkWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  height: 75%;
  justify-content: space-between;
`;

const SettingsWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  height: 85px;
`;

const Logos = styled.img`
  width: 34px;
  height: 34px;
  opacity: 1;
`;

const AsideMenu = () => {
  return (
    <AsideWrapper>
      <NavLinkWrapper>
        <StyledLink exact to="/">
          <Logos src="/icons/home-icon.svg" alt="Home" />
        </StyledLink>
        <StyledLink to="/messages">
          <Logos src="/icons/message-icon.svg" alt="Message" />
        </StyledLink>
        <StyledLink to="/news">
          <Logos src="/icons/news-icon.svg" alt="News" />
        </StyledLink>
        <StyledLink to="/events">
          <Logos src="/icons/event-icon.svg" alt="Events" />
        </StyledLink>
        <StyledLink to="/rounds">
          <Logos src="/icons/parties-icon.svg" alt="Rounds" />
        </StyledLink>
        <StyledLink to="/groups">
          <Logos src="/icons/group-icon.svg" alt="Groups" />
        </StyledLink>
        <StyledLink to="/library">
          <Logos src="/icons/library-icon.svg" alt="Library" />
        </StyledLink>
        <StyledLink to="/market">
          <Logos src="/icons/market-icon.svg" alt="Market" />
        </StyledLink>
      </NavLinkWrapper>

      <SettingsWrapper>
        <Logos src="/icons/settings-icon.svg" alt="Settings" />
        <Logos src="/icons/ask-icon.svg" alt="FAQ" />
      </SettingsWrapper>
    </AsideWrapper>
  );
};

export default AsideMenu;
