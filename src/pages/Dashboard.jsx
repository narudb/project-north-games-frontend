import React from 'react';
import styled from 'styled-components';
import TitleStyle from '../components/ui/Title';
import NewsCard from '../components/NewsCard';

const DashboardWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px;
`;

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <TitleStyle>Actu à la une</TitleStyle>
      <NewsCard />
      <p>Dashboard Page</p>
    </DashboardWrapper>
  );
};

export default Dashboard;
