import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import FormTitleStyle from './ui/FormTitle';
import Form from './ui/FormPost';
import Input from './ui/FormInput';
import InputContent from './ui/FormContent';
import InputBtn from './ui/FormInputBtn';
import 'react-toastify/dist/ReactToastify.css';
import { backend } from '../conf';

const FormNews = ({ open }) => {
  const [news, setNews] = useState({});
  const NewsChange = (e) => {
    const tmp = { ...news, [e.target.name]: e.target.value };
    setNews(tmp);
  };
  const error = () => toast.error('oups il y a une erreur');
  const notify = () => toast.dark('ta news a bien été posté!');
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${backend}/news`, news).then(notify).catch(error);
  };
  return (
    <div>
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
        style={{ fontSize: '30px', textAlign: 'center' }}
      />
      {open && (
        <>
          <FormTitleStyle>Ajoutes ta news</FormTitleStyle>
          <Form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
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
        </>
      )}
    </div>
  );
};
FormNews.propTypes = {
  open: PropTypes.bool,
};
FormNews.defaultProps = {
  open: false,
};
export default FormNews;
