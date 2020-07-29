import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';
import { backend } from '../conf';
import globalTheme from '../theme/globalTheme';

const SearchWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 40vw;
  height: auto;
  border-radius: 5px;
  background-color: white;
  padding: 10px;
  position: absolute;
`;

const SearchTitle = styled.h4`
  color: ${(props) => props.theme.colors.secondary};
  padding: 10px;
`;

const DivInput = styled.input`
  background-color: ${(props) => props.theme.colors.primary};
  background-image: url(/icons/search-icon-blue.svg);
  background-repeat: no-repeat;
  background-position: right;
  font-family: ${(props) => props.theme.fonts.primary};
  border-radius: 5px;
  width: 20vw;
  height: 35px;
  margin: 0 0 0 49px;
  outline: none;
`;

const UlStyle = styled.ul`
  list-style-type: none;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  flex-direction: row;
  overflow: hidden;
  font-size: 13px;
  display: flex;
  align-items: center;
  margin: 2px;
`;

const P = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${(props) => props.theme.colors.mediumGray};
`;

const LiStyle = styled.li`
  width: 10vw;
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  &:hover {
    background: ${(props) => props.theme.colors.blueHover};
  }
`;

const ImgSearch = styled.img`
  width: 2vw;
  height: 2vw;
  margin-right: 5px;
`;

const PNoresult = styled.p`
  color: black;
`;

function NoResult() {
  return (
    <li>
      <PNoresult>No result</PNoresult>
    </li>
  );
}

const SearchResults = ({ nouvelles, events, groups, setNeedle }) => {
  return (
    <SearchWrapper>
      <section>
        <SearchTitle>Actualités</SearchTitle>
        <UlStyle>
          {nouvelles.map((news) => {
            return (
              <LiStyle
                key={news.id}
                onClick={() => {
                  setNeedle('');
                }}
              >
                <NavLink to={`/news/${news.id}`}>
                  <ImgSearch
                    src={news.pictureUrl || globalTheme.pictures.event}
                    alt={news.title}
                  />
                  <P>{news.title}</P>
                </NavLink>
              </LiStyle>
            );
          })}
          {nouvelles.length ? null : <NoResult />}
        </UlStyle>
      </section>
      <section>
        <SearchTitle>Evénements</SearchTitle>
        <UlStyle>
          {events.map((event) => {
            return (
              <LiStyle
                key={event.id}
                onClick={() => {
                  setNeedle('');
                }}
              >
                <NavLink to={`/events/${event.id}`}>
                  <ImgSearch
                    src={event.pictureUrl || globalTheme.pictures.event}
                    alt={event.title}
                  />
                  <P>{event.title}</P>
                </NavLink>
              </LiStyle>
            );
          })}
          {events.length ? null : <NoResult />}
        </UlStyle>
      </section>
      <section>
        <SearchTitle>Groupes</SearchTitle>
        <UlStyle>
          {groups.map((group) => {
            return (
              <LiStyle
                key={group.id}
                onClick={() => {
                  setNeedle('');
                }}
              >
                <NavLink to={`/groups/${group.id}`}>
                  <ImgSearch
                    src={group.image || globalTheme.pictures.group}
                    alt={group.name}
                  />
                  <P>{group.name}</P>
                </NavLink>
              </LiStyle>
            );
          })}
          {groups.length ? null : <NoResult />}
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
  const authToken = useSelector((state) => state.userReducer.authData.token);

  const fetchData = () => {
    axios
      .get(`${backend}/groups?name=${needle}`, {
        headers: {
          Authorization: `Bearer ${authToken || null}`,
        },
      })
      .then(({ data }) => {
        setGroups(
          data.filter((group) => {
            return group.name.trim().toLowerCase().indexOf(needle) !== -1;
          })
        );
      });
    axios.get(`${backend}/events?title=${needle}`).then(({ data }) => {
      setEvent(
        data.filter((event) => {
          return event.title.trim().toLowerCase().indexOf(needle) !== -1;
        })
      );
    });
    axios.get(`${backend}/news?title=${needle}`).then(({ data }) => {
      setNews(
        data.filter((nouvelle) => {
          return nouvelle.title.trim().toLowerCase().indexOf(needle) !== -1;
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
            setNeedle(e.target.value.toLowerCase());
          }}
        />
      </form>
      {needle && (
        <SearchResults
          nouvelles={nouvelles}
          groups={groups}
          events={events}
          setNeedle={setNeedle}
        />
      )}
    </div>
  );
};

SearchResults.propTypes = {
  nouvelles: PropTypes.arrayOf(PropTypes.object).isRequired,
  groups: PropTypes.arrayOf(PropTypes.object).isRequired,
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
  setNeedle: PropTypes.func.isRequired,
};

export default SearchBar;
