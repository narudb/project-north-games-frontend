import React, { useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { backend } from '../conf';
import globalTheme from '../theme/globalTheme';

const NewsPageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 145px 280px 1fr;
  grid-template-areas:
    'title title'
    'img infos'
    'text text';
`;

const EventTitle = styled.h2`
  grid-area: title;
  justify-self: center;
  align-self: center;
  text-align: center;
  font-size: 45px;
  font-weight: bold;
  letter-spacing: 0.2em;
`;

const EventImg = styled.img`
  grid-area: img;
  object-fit: scale-down;
  width: 100%;
  height: 100%;
`;

const EventInfos = styled.div`
  grid-area: infos;
  padding: 30px;
  display: flex;
  flex-flow: row wrap;
`;

const InfosWrapper = styled.div`
  width: 100%;
  height: 50%;
  padding: 15px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
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

const EventText = styled.div`
  grid-area: text;
  padding: 30px;
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

const AuthorWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: baseline;
`;

const TextPara = styled.p`
  line-height: 30px;
  font-size: 14px;
`;

const TextTitle = styled.h3`
  font-weight: bold;
  font-size: 18px;
  border-bottom: 2px solid #fff;
  margin-bottom: 10px;
  margin-right: 10px;
  letter-spacing: 0.1em;
`;

const EventsPage = () => {
  const dispatch = useDispatch();
  const oneEvent = useSelector((state) => state.eventsReducer.oneEvent);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`${backend}/events/${id}`).then(({ data }) => {
      dispatch({
        type: 'GET_ONE_EVENTS',
        data,
      });
    });
  }, [dispatch, id]);

  return (
    <NewsPageContainer>
      <EventTitle>{oneEvent.title}</EventTitle>
      <EventImg
        src={oneEvent.pictureUrl || globalTheme.pictures.event}
        alt={oneEvent.title}
      />
      <EventInfos>
        <InfosWrapper>
          <img src="/icons/event-icon.svg" alt="Date" />
          <div>
            <p>{oneEvent.eventDate}</p>
            <span>{oneEvent.eventTime}</span>
          </div>
        </InfosWrapper>
        <InfosWrapper>
          <img src="/icons/location-icon.svg" alt="Location" />
          <div>
            <p>{oneEvent.adress}</p>
          </div>
        </InfosWrapper>
      </EventInfos>
      <EventText>
        <TextWrapper>
          <TextTitle>Description:</TextTitle>
          <TextPara>{oneEvent.description}</TextPara>
        </TextWrapper>
        <AuthorWrapper>
          <TextTitle>Auteur:</TextTitle>
          <TextPara>{oneEvent.author}</TextPara>
        </AuthorWrapper>
      </EventText>
    </NewsPageContainer>
  );
};

export default EventsPage;
