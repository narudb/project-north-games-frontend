import React from 'react';
import styled from 'styled-components';
import TitleStyle from '../components/ui/Title';
import NewsCard from '../components/NewsCard';
import EventContainer from '../components/EventContainer';

const DashboardWrapper = styled.div`
  width: 50vw;
  height: 100%;
  padding: 15px;
`;

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <TitleStyle>Actu à la une</TitleStyle>
      <NewsCard />
      <EventContainer />
    </DashboardWrapper>
  );
};

export default Dashboard;
