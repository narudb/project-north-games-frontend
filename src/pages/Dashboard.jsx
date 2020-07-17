import React from 'react';
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
  grid-column-gap: 20px;
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
  return (
    <DashboardWrapper>
      <NewsContainer />
      <EventContainer />
      <FormContainer />
      <RoundContainer />
      <GroupContainer />
      <Geolocation />
    </DashboardWrapper>
  );
};
export default Dashboard;
