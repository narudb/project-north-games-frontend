import React from 'react';
import styled from 'styled-components';
import TitleStyle from '../components/ui/Title';
import NewsCard from '../components/NewsCard';
import EventCard from '../components/EventCard';
import RoundCard from '../components/RoundCard';

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
      <TitleStyle>Autour de moi</TitleStyle>
      <EventCard />
      <TitleStyle>Prochaines parties</TitleStyle>
      <RoundCard />
    </DashboardWrapper>
  );
};

export default Dashboard;
