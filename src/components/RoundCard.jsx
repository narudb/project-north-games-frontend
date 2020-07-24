import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import axios from 'axios';
import { backend } from '../conf';
import globalTheme from '../theme/globalTheme';
import StyledLink from './ui/StyledLink';

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 80%;
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
  width: 270px;
  height: 84px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 1px;
  grid-template-areas:
    'img title title'
    'img place place'
    'img author author'
    'img . .'
    'img date date'
    'img . .';
  background: ${(props) => props.theme.colors.primary};
  border-radius: 5px;
  overflow: hidden;
  margin-top: 20px;
  margin-right: 20px;
`;

const CardImg = styled.div`
  width: 80px;
  height: 80px;
  margin: 2px;
  background-color: ${(props) => props.theme.colors.primary};
  overflow: hidden;
  border-radius: 5px;
`;

const NewsImg = styled.img`
  grid-area: img;
  width: 80px;
  height: 80px;
`;

const TextWrapper = styled.div`
  padding: 10px 5px;
  color: ${(props) => props.theme.colors.secondary};
`;

const Title = styled.h3`
  grid-area: title;
  font-size: 13px;
  line-height: 18px;
  color: ${(props) => props.theme.colors.dark};
  white-space: nowrap;
  text-transform: uppercase;
  width: 180px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Date = styled.h4`
  grid-area: date;
  font-size: 12px;
  line-height: 16px;
  color: ${(props) => props.theme.colors.secondary};
`;

const Adress = styled.p`
  grid-area: place;
  white-space: nowrap;
  font-size: 11px;
  line-height: 15px;
  color: ${(props) => props.theme.colors.mediumGray};
  overflow: hidden;
  text-overflow: ellipsis;
  width: 175px;
`;

const Author = styled.p`
  grid-area: author;
  font-size: 11px;
  line-height: 15px;
  text-transform: uppercase;
  span {
    text-transform: none;
  }
`;

const RoundCard = () => {
  const dispatch = useDispatch();
  const roundsData = useSelector((state) => state.roundsReducer.roundsData);
  const authToken = useSelector((state) => state.userReducer.authData.token);

  useEffect(() => {
    axios
      .get(`${backend}/rounds`, {
        headers: {
          Authorization: `Bearer ${authToken || null}`,
        },
      })
      .then(({ data }) => {
        dispatch({
          type: 'GET_ALL_ROUNDS',
          data,
        });
      });
  }, [dispatch, authToken]);

  return (
    <>
      <CardContainer>
        {roundsData
          .map((round) => {
            return (
              <StyledLink to={`/rounds/${round.roundId}`} key={round.roundId}>
                <CardWrapper>
                  <CardImg>
                    <NewsImg
                      src={
                        round.roundImage !== null
                          ? round.roundImage
                          : globalTheme.pictures.round
                      }
                      alt={round.gameName}
                    />
                  </CardImg>
                  <TextWrapper>
                    <Title>{round.roundName}</Title>
                    <Adress>{round.roundPlace}</Adress>
                    <Author>
                      <span>par</span> {round.roundCreator}
                    </Author>
                    <Date>{round.roundDate}</Date>
                  </TextWrapper>
                </CardWrapper>
              </StyledLink>
            );
          })
          .slice(0, 10)}
      </CardContainer>
    </>
  );
};

export default RoundCard;
