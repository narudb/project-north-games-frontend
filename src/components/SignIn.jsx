import React, { useState } from 'react';
import styled from 'styled-components';
import Title from './ui/Title';
import Form from './ui/Form';
import Input from './ui/Input';
import InputBtn from './ui/InputBtn';

const SignInWrapper = styled.div`
  height: 90%;
`;

const SignIn = () => {
  const [authUser, setAuthUser] = useState({});

  const handleChange = (e) => {
    const tmp = { ...authUser, [e.target.name]: e.target.value };
    setAuthUser(tmp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <SignInWrapper>
      <Title>Je me connecte</Title>
      <Form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <Input
          type="email"
          name="email"
          id="email"
          required
          placeholder="Ton Email"
          onChange={(e) => {
            handleChange(e);
          }}
        />

        <Input
          type="password"
          name="password"
          id="password"
          required
          placeholder="Ton mot de passe"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <InputBtn type="submit" value="Je me connecte" />
      </Form>
    </SignInWrapper>
  );
};

export default SignIn;
