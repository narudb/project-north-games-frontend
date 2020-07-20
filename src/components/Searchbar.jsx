import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';
import { backend } from '../conf';

const DivInput = styled.input`
  background-color: ${(props) => props.theme.colors.secondary};
  background-image: url(/icons/search-icon.svg);
  background-repeat: no-repeat;
  background-position: right;
  border-radius: 5px;
  width: 196.34px;
  height: 35px;
`;

const icons = ['ಠ_ಠ', '( ͠° ͟ʖ ͠°)', '(v°_°v)', '¬_¬', '(；⌣̀_⌣́)'];
function NoResult() {
  const numIcon = Math.floor(Math.random() * icons.length);
  return (
    <li className="NoResult">
      <h5>{icons[numIcon]}</h5>
      <p>
        Désolé, on a <br />
        rien trouvé !
      </p>
    </li>
  );
}

const SearchResults = ({ nouvelles, events, groups }) => {
  return (
    <div id="SearchResults" className="flexer">
      <section className="item">
        <h4>Actualités</h4>
        <ul>
          {nouvelles.map((news) => {
            return (
              <li key={news.id}>
                <Link to={`/news/${news.id}`}>{news.title}</Link>
              </li>
            );
          })}
          {nouvelles.length ? <></> : <NoResult />}
        </ul>
      </section>
      <section className="big-item">
        <h4>Evénements</h4>
        <ul>
          {events.map((event) => {
            return (
              <li key={event.id}>
                <Link to={`/events/${event.id}`}>{event.title}</Link>
              </li>
            );
          })}
          {events.length ? <></> : <NoResult />}
        </ul>
      </section>
      <section className="item">
        <h4>Groupes</h4>
        <ul>
          {groups.map((group) => {
            return (
              <li key={group.id}>
                <Link to={`/groups/${group.id}`}>{group.name}</Link>
              </li>
            );
          })}
          {groups.length ? <></> : <NoResult />}
        </ul>
      </section>
    </div>
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
