import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';
import { backend } from '../conf';
import Title from './ui/Title';
import Form from './ui/Form';
import Input from './ui/Input';
import InputBtn from './ui/InputBtn';

const SignInWrapper = styled.div`
  height: 90%;
`;

const SignIn = () => {
  const dispatch = useDispatch();
  const [authUser, setAuthUser] = useState({});

  const handleChange = (e) => {
    const tmp = { ...authUser, [e.target.name]: e.target.value };
    setAuthUser(tmp);
  };

  const signIn = (e) => {
    e.preventDefault();

    axios.post(`${backend}/auth/signin`, authUser).then(({ data }) => {
      dispatch({
        type: 'LOGIN',
        payload: {
          token: data.token,
          mail: data.user.mail,
          id: data.user.id,
        },
      });
    });
  };

  return (
    <SignInWrapper>
      <Title>Je me connecte</Title>
      <Form
        onSubmit={(e) => {
          signIn(e);
        }}
      >
        <Input
          type="email"
          name="mail"
          required
          placeholder="Ton Email"
          onChange={(e) => {
            handleChange(e);
          }}
        />

        <Input
          type="password"
          name="password"
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
