import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { backend } from '../conf';
import Form from './ui/FormPost';
import Input from './ui/FormInput';
import InputContent from './ui/FormContent';
import InputBtn from './ui/FormInputBtn';

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
  const authData = useSelector((state) => state.userReducer.authData);

  const NewsChange = (e) => {
    const tmp = {
      ...news,
      [e.target.name]: e.target.value,
      author_id: authData.id,
    };
    setNews(tmp);
  };

  const error = () => toast.error('Oups il y a une erreur');
  const notify = () => toast.success('Ta news a bien été posté!');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${backend}/news`, news, {
        headers: {
          Authorization: `Bearer ${authData.token || null}`,
        },
      })
      .then(notify)
      .catch(error);
    e.target.reset();
    setNews({});
  };

  return (
    <FormContainer>
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
            placeholder="Écris ton contenu ici"
          />
          <Input
            type="text"
            name="picture_url"
            onChange={(e) => {
              NewsChange(e);
            }}
            placeholder="Url de ton image"
          />
          <InputBtn type="submit" value="poster" />
        </Form>
      </div>
    </FormContainer>
  );
};
export default FormNews;
