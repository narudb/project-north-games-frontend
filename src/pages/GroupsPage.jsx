import React, { useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import globalTheme from '../theme/globalTheme';
import Avatar from '../components/ui/Avatar';
import { backend } from '../conf';

const GroupPageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 145px 280px 1fr;
  grid-template-areas:
    'title title'
    'img infos'
    'text text';
`;

const GroupTitle = styled.h2`
  grid-area: title;
  justify-self: center;
  align-self: center;
  text-align: center;
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 45px;
  font-weight: bold;
  letter-spacing: 0.2em;
`;

const GroupImg = styled.img`
  grid-area: img;
  object-fit: scale-down;
  width: 100%;
  height: 100%;
`;

const GroupInfos = styled.div`
  grid-area: infos;
  padding-left: 30px;
  display: flex;
  flex-flow: row wrap;
`;

const InfosWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  p {
    font-family: ${(props) => props.theme.fonts.primary};
    line-height: 30px;
    font-size: 18px;
  }
  span {
    font-family: ${(props) => props.theme.fonts.primary};
    opacity: 0.6;
  }
  img {
    width: 50px;
    height: 50px;
    opacity: 1;
    margin-right: 20px;
  }
`;

const TextPara = styled.p`
  font-family: ${(props) => props.theme.fonts.primary};
  line-height: 30px;
  font-size: 14px;
`;

const GroupsPage = () => {
  const dispatch = useDispatch();
  const oneGroup = useSelector((state) => state.groupsReducer.oneGroup);
  const authToken = useSelector((state) => state.userReducer.authData.token);
  const authorOfGroup = useSelector(
    (state) => state.groupsReducer.authorOfGroup
  );
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${backend}/groups/${id}`, {
        headers: {
          Authorization: `Bearer ${authToken || null}`,
        },
      })
      .then(({ data }) => {
        dispatch({
          type: 'GET_ONE_GROUP',
          data,
        });
      });
    axios
      .get(`${backend}/groups/${id}/author`, {
        headers: {
          Authorization: `Bearer ${authToken || null}`,
        },
      })
      .then(({ data }) => {
        dispatch({
          type: 'GET_AUTHOR_OF_GROUP',
          data,
        });
      });
  }, [dispatch, id, authToken]);

  return (
    <GroupPageContainer>
      <GroupTitle>{oneGroup.name}</GroupTitle>
      <GroupImg
        src={oneGroup.groupImage || globalTheme.pictures.group}
        alt={oneGroup.gameName}
      />
      <GroupInfos>
        <InfosWrapper>
          <img src="/icons/event-icon.svg" alt="Date" />
          <div>
            <p>Groupe créé le :</p>
            <span>{oneGroup.groupCreationDate}</span>
          </div>
        </InfosWrapper>
        <InfosWrapper>
          <Avatar
            src={authorOfGroup.authorAvatar || globalTheme.pictures.avatar}
            alt={authorOfGroup.author}
          />
          <TextPara>Auteur: {authorOfGroup.author}</TextPara>
        </InfosWrapper>
        <InfosWrapper>
          <img src="/icons/group-icon.svg" alt="Max players" />
          <div>
            <p>
              Nombre de joueurs : {oneGroup.numberOfPlayers} /{' '}
              {oneGroup.GroupMaxPlayers}
            </p>
          </div>
        </InfosWrapper>
      </GroupInfos>
    </GroupPageContainer>
  );
};

export default GroupsPage;
