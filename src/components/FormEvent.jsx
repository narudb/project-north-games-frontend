import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import { backend } from '../conf';
import Form from './ui/FormPost';
import Input from './ui/FormInput';
import InputContent from './ui/FormContent';
import InputBtn from './ui/FormInputBtn';
import 'react-toastify/dist/ReactToastify.css';

const FormContainer = styled.div`
  width: 100%;
  overflow-y: scroll;
  height: 35vh;
  display: block;
  padding-bottom: 10px;

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.5);
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 5px;
  }
`;

const FormEvent = () => {
  const [events, setEvents] = useState({});
  const authData = useSelector((state) => state.userReducer.authData);

  const NewsChange = (e) => {
    const tmp = {
      ...events,
      [e.target.name]: e.target.value,
      author_id: authData.id,
    };
    setEvents(tmp);
  };

  const error = () => toast.error('oups il y a une erreur');
  const notify = () => toast.dark('ton event a bien été posté!');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${backend}/events`, events, {
        headers: {
          Authorization: `Bearer ${authData.token || null}`,
        },
      })
      .then(notify)
      .catch(error);
  };
  return (
    <FormContainer>
      <ToastContainer
        position="bottom-left"
        autoClose={6000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ fontSize: '20px', textAlign: 'center' }}
      />
      <div>
        <Form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <Input
            type="text"
            name="event_date"
            required
            onChange={(e) => {
              NewsChange(e);
            }}
            placeholder="Date de l'events au format AAAA/MM/JJ HH:MM:SS"
          />
          <InputContent
            type="text"
            name="adress"
            required
            onChange={(e) => {
              NewsChange(e);
            }}
            placeholder="Adresse"
          />
          <Input
            type="text"
            name="title"
            required
            onChange={(e) => {
              NewsChange(e);
            }}
            placeholder="Titre"
          />
          <Input
            type="text"
            name="picture_url"
            onChange={(e) => {
              NewsChange(e);
            }}
            placeholder="url de ton image"
          />
          <InputContent
            type="text"
            name="description"
            onChange={(e) => {
              NewsChange(e);
            }}
            placeholder="Décris l'event"
          />
          <Input
            type="number"
            name="is_published"
            required
            onChange={(e) => {
              NewsChange(e);
            }}
            placeholder="inscris 1 si publiée ou 0 si non publiée"
          />
          <Input
            type="text"
            name="release_date"
            onChange={(e) => {
              NewsChange(e);
            }}
            placeholder="Date de libération au format AAAA/MM/JJ HH:MM:SS"
          />
          <Input
            type="text"
            name="event_latitude"
            required
            onChange={(e) => {
              NewsChange(e);
            }}
            placeholder="Latitude"
          />
          <Input
            type="text"
            name="event_longitude"
            required
            onChange={(e) => {
              NewsChange(e);
            }}
            placeholder="Longitude"
          />
          <InputBtn type="submit" value="poster" />
        </Form>
      </div>
    </FormContainer>
  );
};

export default FormEvent;
