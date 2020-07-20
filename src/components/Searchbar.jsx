import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';
import { backend } from '../conf';

const SearchWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 50vw;
  height: auto;
  border-radius: 5px;
  background-color: white;
  padding: 10px;
`;

const SearchTitle = styled.h4`
  color: black;
  margin-bottom: 2px;
`;

const DivInput = styled.input`
  background-color: ${(props) => props.theme.colors.secondary};
  background-image: url(/icons/search-icon.svg);
  background-repeat: no-repeat;
  background-position: right;
  border-radius: 5px;
  width: 20vw;
  height: 35px;
`;

const UlStyle = styled.ul`
  list-style-type: none;
`;

const NavLink = styled(Link)`
  color: ${(props) => props.theme.fonts.mediumGray};
  font-family: ${(props) => props.theme.fonts.primary};
  text-decoration: none;
`;

const LiStyle = styled.li`
  width: 15vw;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  /* white-space: pre-line; */
`;

const ImgSearch = styled.img`
  width: 2vw;
  height: 2vw;
`;

function NoResult() {
  return (
    <li>
      <p>No result</p>
    </li>
  );
}

const SearchResults = ({ nouvelles, events, groups }) => {
  return (
    <SearchWrapper>
      <section>
        <SearchTitle>Actualités</SearchTitle>
        <UlStyle>
          {nouvelles.map((news) => {
            return (
              <LiStyle key={news.id}>
                <NavLink to={`/news/${news.id}`}>
                  <ImgSearch src={news.pictureUrl} alt={news.title} />
                  {news.title}
                </NavLink>
              </LiStyle>
            );
          })}
          {nouvelles.length ? <></> : <NoResult />}
        </UlStyle>
      </section>
      <section>
        <SearchTitle>Evénements</SearchTitle>
        <UlStyle>
          {events.map((event) => {
            return (
              <LiStyle key={event.id}>
                <NavLink to={`/events/${event.id}`}>
                  <ImgSearch src={event.pictureUrl} alt={event.title} />
                  {event.title}
                </NavLink>
              </LiStyle>
            );
          })}
          {events.length ? <></> : <NoResult />}
        </UlStyle>
      </section>
      <section>
        <SearchTitle>Groupes</SearchTitle>
        <UlStyle>
          {groups.map((group) => {
            return (
              <LiStyle key={group.id}>
                <NavLink to={`/groups/${group.id}`}>
                  <ImgSearch src={group.groupImage} alt={group.name} />
                  {group.name}
                </NavLink>
              </LiStyle>
            );
          })}
          {groups.length ? <></> : <NoResult />}
        </UlStyle>
      </section>
    </SearchWrapper>
  );
};

const SearchBar = () => {
  const [needle, setNeedle] = useState('');
  const [nouvelles, setNews] = useState([]);
  const [events, setEvent] = useState([]);
  const [groups, setGroups] = useState([]);

  const fetchData = () => {
    axios.get(`${backend}/groups?name=${needle}`).then(({ data }) => {
      setGroups(
        data.filter((group) => {
          return group.name.indexOf(needle) !== -1;
        })
      );
    });
    axios.get(`${backend}/events?title=${needle}`).then(({ data }) => {
      setEvent(
        data.filter((event) => {
          return event.title.indexOf(needle) !== -1;
        })
      );
    });
    axios.get(`${backend}/news?title=${needle}`).then(({ data }) => {
      setNews(
        data.filter((nouvelle) => {
          return nouvelle.title.indexOf(needle) !== -1;
        })
      );
    });
  };

  useEffect(() => {
    if (!needle) return;
    fetchData(needle);
  }, [needle]);

  return (
    <div>
      <form action="" autoComplete="on">
        <DivInput
          id="search"
          name="search"
          type="text"
          placeholder="Recherche"
          value={needle}
          onChange={(e) => {
            setNeedle(e.target.value);
          }}
        />
      </form>
      {needle && (
        <SearchResults nouvelles={nouvelles} groups={groups} events={events} />
      )}
    </div>
  );
};

SearchResults.propTypes = {
  nouvelles: PropTypes.arrayOf(PropTypes.object), // eslint-disable-line
  groups: PropTypes.arrayOf(PropTypes.object), // eslint-disable-line
  events: PropTypes.arrayOf(PropTypes.object), // eslint-disable-line
  idx: PropTypes.number, // eslint-disable-line
};

export default SearchBar;
