import React, { useState } from 'react';
import styled from 'styled-components';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import ButtonStyle from '../components/ui/Button';
import EventContainer from '../components/EventContainer';
import NewsContainer from '../components/NewsContainer';
import RoundContainer from '../components/RoundContainer';

const DashboardWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-column-gap: 20px;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr 5px 1fr 1fr;
  grid-template-areas:
    'news form'
    'news form'
    '. .'
    'events aside'
    'events aside';
`;

const FormWrapper = styled.div`
  height: 100%;
  grid-area: form;
  display: grid;
  padding: 15px 10px;
`;

const Dashboard = () => {
  const [showSignup, toggleForm] = useState(true);

  return (
    <DashboardWrapper>
      <NewsContainer />
      <EventContainer />
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
      <RoundContainer />
    </DashboardWrapper>
  );
};
export default Dashboard;
