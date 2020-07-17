import React, { useState } from 'react';
import styled from 'styled-components';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ButtonStyle from './ui/Button';

const FormWrapper = styled.div`
  height: 45vh;
  grid-area: asideTop;
  display: grid;
  padding: 17px 10px;
`;

const FormContainer = () => {
  const [showSignup, toggleForm] = useState(true);
  return (
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
  );
};

export default FormContainer;
