import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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
  background-color: gray;
  overflow: hidden;
  border-radius: 5px;
`;

const NewsImg = styled.img`
  grid-area: img;
  width: 80px;
  height: 80px;
`;

const TextWrapper = styled.div`
  padding: 10px 15px;
  color: ${(props) => props.theme.colors.secondary};
  text-transform: uppercase;
`;

const Title = styled.h3`
  grid-area: title;
  font-size: 13px;
  line-height: 18px;
  color: ${(props) => props.theme.colors.dark};
  white-space: nowrap;
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
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${(props) => props.theme.colors.mediumGray};
`;

const Author = styled.p`
  grid-area: author;
  font-size: 11px;
  line-height: 15px;
`;

const RoundCard = () => {
  const dispatch = useDispatch();
  const roundsData = useSelector((state) => state.roundsReducer.roundsData);

  const getAllRounds = () => {
    axios.get('/rounds').then(({ data }) => {
      dispatch({
        type: 'GET_ALL_ROUNDS',
        data,
      });
    });
  };
  useEffect(() => {
    getAllRounds();
  }, [dispatch]);

  return (
    <>
      <CardContainer>
        {roundsData
          .map((round) => {
            return (
              <CardWrapper key={round.roundId}>
                <CardImg>
                  <NewsImg
                    src={
                      round.roundImage !== null
                        ? round.roundImage
                        : 'images/dice-twenty-faces-one.png'
                    }
                    alt={round.gameName}
                  />
                </CardImg>
                <TextWrapper>
                  <Title>{round.roundName}</Title>
                  <Adress>{round.roundPlace}</Adress>
                  <Author>par {round.roundCreator}</Author>
                  <Date>{round.roundDate}</Date>
                </TextWrapper>
              </CardWrapper>
            );
          })
          .slice(0, 10)}
      </CardContainer>
    </>
  );
};

export default RoundCard;
