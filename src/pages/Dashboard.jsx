import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import EventContainer from '../components/EventContainer';
import NewsContainer from '../components/NewsContainer';
import RoundContainer from '../components/RoundContainer';
import GroupContainer from '../components/GroupContainer';
import FormContainer from '../components/FormContainer';
import Geolocation from '../components/Geolocation';

const DashboardWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-column-gap: 30px;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr 5px 1fr 1fr;
  grid-template-areas:
    'news asideTop'
    'news asideTop'
    '. .'
    'events asideDown'
    'events asideDown';
`;

const Dashboard = () => {
  const isLoggedIn = useSelector((state) => state.userReducer.loggedIn);

  return (
    <DashboardWrapper>
      <NewsContainer />
      <EventContainer />
      {isLoggedIn ? (
        <>
          <RoundContainer />
          <GroupContainer />
        </>
      ) : (
        <FormContainer />
      )}

      <Geolocation />
    </DashboardWrapper>
  );
};
export default Dashboard;
