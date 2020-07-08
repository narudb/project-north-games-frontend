import React, { useState } from 'react';
import styled from 'styled-components';
import Title from './ui/Title';
import Form from './ui/Form';
import Input from './ui/Input';
import InputBtn from './ui/InputBtn';

const SignUpWrapper = styled.div`
  height: 90%;
`;

const SignUp = () => {
  const [newUser, setNewUser] = useState({});

  const handleChange = (e) => {
    const tmp = { ...newUser, [e.target.name]: e.target.value };
    setNewUser(tmp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <SignUpWrapper>
      <Title>Inscris-toi</Title>
      <Form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <Input
          type="text"
          name="name"
          id="name"
          required
          onChange={(e) => {
            handleChange(e);
          }}
          placeholder="Ton Nom"
        />
        <Input
          type="email"
          name="email"
          id="email"
          required
          onChange={(e) => {
            handleChange(e);
          }}
          placeholder="Ton Email"
        />
        <Input
          type="password"
          name="password"
          id="password"
          required
          onChange={(e) => {
            handleChange(e);
          }}
          placeholder="Ton mot de passe"
        />
        <Input
          type="password"
          name="passwordbis"
          id="passwordbis"
          required
          // Maybe not usefull ask Loïc?
          onChange={(e) => {
            handleChange(e);
          }}
          placeholder="Confirme ton mot de passe"
        />
        <InputBtn type="submit" value="Je m'inscris" />
      </Form>
    </SignUpWrapper>
  );
};
export default SignUp;
