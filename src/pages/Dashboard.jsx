import React, { useState } from 'react';
import styled from 'styled-components';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import ButtonStyle from '../components/ui/Button';
import TitleStyle from '../components/ui/Title';
import NewsCard from '../components/NewsCard';
import EventCard from '../components/EventCard';
import FormNews from '../components/FormNews';
import AddBtn from '../components/ui/AddBtn';
import Geolocation from '../components/Geolocation';

const DashboardWrapper = styled.div`
  width: 50vw;
  height: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    'news form'
    'news form'
    '. .'
    'events aside'
    'events aside';
`;

const FormWrapper = styled.div`
  grid-area: form;
  display: flex;
  flex-flow: column wrap;
  padding: 10px;
`;
const Dashboard = () => {

  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  const [showSignup, toggleForm] = useState(true);

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
      <Geolocation />
      <EventCard />
      <p>Dashboard Page</p>
      <FormWrapper>
        {showSignup ? (
          <>
            <SignUp />
            <ButtonStyle
              type="button"
              onClick={() => {
                toggleForm(false);
              }}
            >
              J&apos;ai déjà un compte !
            </ButtonStyle>
          </>
        ) : (
          <>
            <SignIn />
            <ButtonStyle
              type="button"
              onClick={() => {
                toggleForm(true);
              }}
            >
              Je peux m&apos;inscrire ?
            </ButtonStyle>
          </>
        )}
      </FormWrapper>
    </DashboardWrapper>
  );
};
export default Dashboard;
