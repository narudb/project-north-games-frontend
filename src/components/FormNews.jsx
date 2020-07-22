import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import styled from 'styled-components';
import { backend } from '../conf';
import Form from './ui/FormPost';
import Input from './ui/FormInput';
import InputContent from './ui/FormContent';
import InputBtn from './ui/FormInputBtn';
import 'react-toastify/dist/ReactToastify.css';

const FormContainer = styled.div`
  width: 100%;
  overflow-y: scroll;
  height: 30vh;
  margin-bottom: 40px;
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

const FormNews = () => {
  const [news, setNews] = useState({});
  const authToken = useSelector((state) => state.userReducer.authData.token);

  const NewsChange = (e) => {
    const tmp = { ...news, [e.target.name]: e.target.value };
    setNews(tmp);
  };

  const error = () => toast.error('oups il y a une erreur');
  const notify = () => toast.dark('ta news a bien été posté!');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${backend}/news`, news, {
        headers: {
          Authorization: `Bearer ${authToken || null}`,
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
            name="title"
            required
            onChange={(e) => {
              NewsChange(e);
            }}
            placeholder="Titre"
          />
          <InputContent
            type="text"
            name="content"
            required
            onChange={(e) => {
              NewsChange(e);
            }}
          />
          <Input
            type="text"
            name="author"
            required
            onChange={(e) => {
              NewsChange(e);
            }}
            placeholder="Auteur"
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
          <InputContent
            type="text"
            name="content"
            required
            onChange={(e) => {
              NewsChange(e);
            }}
            placeholder="Contenu"
          />
          <Input
            type="text"
            name="picture_url"
            onChange={(e) => {
              NewsChange(e);
            }}
            placeholder="url de ton image"
          />
          <InputBtn type="submit" value="poster" />
        </Form>
      </div>
    </FormContainer>
  );
};
export default FormNews;
