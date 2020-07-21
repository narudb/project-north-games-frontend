import React, { useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import globalTheme from '../theme/globalTheme';
import { backend } from '../conf';

const RoundPageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 145px 280px 1fr;
  grid-template-areas:
    'title title'
    'img infos'
    'text text';
`;

const RoundTitle = styled.h2`
  grid-area: title;
  justify-self: center;
  align-self: center;
  text-align: center;
  font-size: 45px;
  font-weight: bold;
  letter-spacing: 0.2em;
`;

const RoundImg = styled.img`
  grid-area: img;
  object-fit: cover;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.mediumGray};
`;

const Avatar = styled.img`
  border: solid 4px white;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  opacity: 1;
`;

const RoundInfos = styled.div`
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
    line-height: 30px;
    font-size: 18px;
  }
  span {
    opacity: 0.6;
  }
  img {
    width: 50px;
    height: 50px;
    opacity: 1;
    margin-right: 20px;
  }
`;

const RoundText = styled.div`
  grid-area: text;
  padding: 30px 30vw 0 0;
  display: flex;
  flex-flow: row wrap;
`;

const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const TextPara = styled.p`
  line-height: 30px;
  font-size: 14px;
`;

const TextTitle = styled.h3`
  font-weight: bold;
  border-bottom: 2px solid #fff;
  margin-bottom: 10px;
  margin-right: 10px;
  letter-spacing: 0.1em;
`;

const RoundsPage = () => {
  const dispatch = useDispatch();
  const oneRound = useSelector((state) => state.roundsReducer.oneRound);
  const authToken = useSelector((state) => state.userReducer.authData.token);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${backend}/rounds/${id}`, {
        headers: {
          Authorization: `Bearer ${authToken || null}`,
        },
      })
      .then(({ data }) => {
        dispatch({
          type: 'GET_ONE_ROUND',
          data,
        });
      });
  }, [dispatch, id, authToken]);

  return (
    <RoundPageContainer>
      <RoundTitle>{oneRound.roundName}</RoundTitle>
      <RoundImg
        src={oneRound.roundImage || globalTheme.pictures.round}
        alt={oneRound.gameName}
      />
      <RoundInfos>
        <InfosWrapper>
          <img src="/icons/event-icon.svg" alt="Date" />
          <div>
            <p>{oneRound.roundDate}</p>
            <span>{oneRound.roundTime}</span>
          </div>
        </InfosWrapper>
        <InfosWrapper>
          <img src="/icons/location-icon.svg" alt="Location" />
          <div>
            <p>{oneRound.place}</p>
          </div>
        </InfosWrapper>
        <InfosWrapper>
          <Avatar
            src={oneRound.authorAvatar || globalTheme.pictures.avatar}
            alt="auteur"
          />
          <TextPara>{oneRound.authorName}</TextPara>
        </InfosWrapper>
        <InfosWrapper>
          <img src="/icons/group-icon.svg" alt="Max players" />
          <div>
            <p>Nombre de joueurs : {oneRound.groupMaxPlayers}</p>
          </div>
        </InfosWrapper>
      </RoundInfos>
      <RoundText>
        <TextWrapper>
          <TextTitle>Description:</TextTitle>
          <TextPara>{oneRound.roundContent}</TextPara>
        </TextWrapper>
      </RoundText>
    </RoundPageContainer>
  );
};

export default RoundsPage;
