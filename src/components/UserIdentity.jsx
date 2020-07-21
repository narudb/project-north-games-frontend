import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import axios from 'axios';
import { backend } from '../conf';
import globalTheme from '../theme/globalTheme';
import Avatar from './ui/Avatar';

const Username = styled.p`
  font-family: ${(props) => props.theme.fonts.primary};
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  text-transform: uppercase;
  margin-top: 15px;
`;
const UserWrapper = styled.div`
  width: 15vw;
  display: flex;
  justify-content: space-evenly;
  margin-right: 20px;
`;

const UserIdentity = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userReducer.userData);
  const authData = useSelector((state) => state.userReducer.authData);

  useEffect(() => {
    axios
      .get(`${backend}/users/${authData.id}`, {
        headers: {
          Authorization: `Bearer ${authData.token || null}`,
        },
      })
      .then(({ data }) => {
        dispatch({
          type: 'GET_USER',
          payload: data,
        });
      });
  }, [dispatch, authData.id, authData.token]);

  return (
    <UserWrapper>
      <Avatar
        src={
          userData.avatar !== null
            ? userData.avatar
            : globalTheme.pictures.avatar
        }
        alt={userData.name}
      />
      <Username>{userData.name}</Username>
    </UserWrapper>
  );
};

export default UserIdentity;
