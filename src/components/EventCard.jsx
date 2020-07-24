import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { backend } from '../conf';
import StyledLink from './ui/StyledLink';
import globalTheme from '../theme/globalTheme';

const CardContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  height: 35vh;
  width: 100%;
  justify-content: space-evenly;
  overflow-y: scroll;

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

const CardWrapper = styled.div`
  width: 327px;
  height: 242px;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 5px;
  overflow: hidden;
  margin: 10px;
`;

const CardImg = styled.div`
  width: 100%;
  height: 171px;
  background-color: ${(props) => props.theme.colors.primary};
  overflow: hidden;
`;

const NewsImg = styled.img`
  width: 100%;
`;

const TextWrapper = styled.div`
  padding: 10px 15px;
  color: ${(props) => props.theme.colors.secondary};
  text-transform: uppercase;
`;

const Title = styled.h3`
  font-size: 13px;
  line-height: 18px;
  color: ${(props) => props.theme.colors.dark};
`;

const Date = styled.h4`
  font-size: 12px;
  line-height: 16px;
  color: ${(props) => props.theme.colors.secondary};
`;

const Adress = styled.p`
  white-space: nowrap;
  font-size: 10px;
  line-height: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${(props) => props.theme.colors.mediumGray};
`;

const EventCard = () => {
  const dispatch = useDispatch();
  const eventsData = useSelector((state) => state.eventsReducer.eventsData);
  const latClient = useSelector((state) => state.positionReducer.latClient);
  const longClient = useSelector((state) => state.positionReducer.longClient);

  useEffect(() => {
    const getAllEvents = () => {
      const distance = (evt) => {
        const newEvent = evt;
        const result = Math.sqrt(
          (newEvent.eventLatitude - latClient) *
            111 *
            ((newEvent.eventLatitude - latClient) * 111) +
            (newEvent.eventLongitude - longClient) *
              70 *
              ((newEvent.eventLongitude - longClient) * 70)
        );
        newEvent.distance = result.toFixed(3);
        return newEvent;
      };
      axios
        .get(`${backend}/events`)
        .then((response) => response.data)
        .then((data) => {
          data.map((evt) => {
            return distance(evt);
          });
          dispatch({
            type: 'GET_ALL_EVENTS',
            data,
          });
        });
    };
    getAllEvents();
  }, [dispatch, latClient, longClient]);

  return (
    <>
      <CardContainer>
        {eventsData
          .sort((st1, st2) => {
            return st1.distance - st2.distance;
          })
          .map((event) => {
            return (
              <StyledLink to={`/events/${event.id}`} key={event.id}>
                <CardWrapper>
                  <CardImg>
                    <NewsImg
                      src={event.pictureUrl || globalTheme.pictures.event}
                      alt="event-img"
                    />
                  </CardImg>
                  <TextWrapper>
                    <Date>{event.eventDate}</Date>
                    <Title>{event.title}</Title>
                    <Adress>{event.adress}</Adress>
                  </TextWrapper>
                </CardWrapper>
              </StyledLink>
            );
          })}
      </CardContainer>
    </>
  );
};

export default EventCard;
