import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import { backend } from '../conf';
import Form from './ui/FormPost';
import Input from './ui/FormInput';
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

const FormGroup = () => {
  const [group, setGroup] = useState({});
  const authData = useSelector((state) => state.userReducer.authData);

  const NewsChange = (e) => {
    const tmp = {
      ...group,
      [e.target.name]: e.target.value,
      author_id: authData.id,
    };
    setGroup(tmp);
  };

  const error = () => toast.error('oups il y a une erreur');
  const notify = () => toast.dark('ton event a bien été posté!');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${backend}/groups`, group, {
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
            name="name"
            required
            onChange={(e) => {
              NewsChange(e);
            }}
            placeholder="Nom du groupe"
          />
          <Input
            type="text"
            name="image"
            onChange={(e) => {
              NewsChange(e);
            }}
            placeholder="L'URL de ton image"
          />
          <Input
            type="number"
            name="max_players"
            required
            onChange={(e) => {
              NewsChange(e);
            }}
            placeholder="Nombre de joueurs autorisés"
          />
          <InputBtn type="submit" value="poster" />
        </Form>
      </div>
    </FormContainer>
  );
};

export default FormGroup;
