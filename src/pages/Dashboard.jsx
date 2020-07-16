import React from 'react';
import styled from 'styled-components';
import TitleStyle from '../components/ui/Title';
import NewsCard from '../components/NewsCard';
import EventCard from '../components/EventCard';
import FormNews from '../components/FormNews';
import AddBtn from '../components/ui/AddBtn';

const DashboardWrapper = styled.div`
  width: 50vw;
  height: 100%;
  padding: 15px;
`;
const Dashboard = () => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <DashboardWrapper>
      <TitleStyle>
        Actu à la une{' '}
        <AddBtn type="submit" value="open" onClick={handleClick}>
          +
        </AddBtn>
      </TitleStyle>{' '}
      <FormNews open={open} />
      <NewsCard />
      <TitleStyle>Autour de moi</TitleStyle>
      <EventCard />
    </DashboardWrapper>
  );
};
export default Dashboard;
