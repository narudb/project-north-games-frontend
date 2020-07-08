import React, { useState } from 'react';
import styled from 'styled-components';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import ButtonStyle from '../components/ui/Button';

const DashboardWrapper = styled.div`
  width: 100%;
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
  border: 1px solid purple;
  display: flex;
  flex-flow: column wrap;
  padding: 10px;
`;

const Dashboard = () => {
  const [showSignup, toggleForm] = useState(true);

  return (
    <DashboardWrapper>
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
