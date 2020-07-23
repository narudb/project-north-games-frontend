import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { backend } from '../conf';

const CartridgeWrapper = styled.div`
  width: 50vw;
  height: 220px;
  background-color: ${(props) => props.theme.colors.tertiary};
  border-radius: 5px;
  padding: 10px;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-column-gap: 20px;
`;

const GameImg = styled.img`
  justify-self: center;
  grid-row: 1/4;
  width: 170px;
  height: 170px;
`;

const Title = styled.h6`
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
`;

const Content = styled.p`
  font-size: 14px;
  line-height: 17px;
  text-transform: uppercase;
`;

const GameCartridge = ({ id }) => {
  const dispatch = useDispatch();
  const oneGame = useSelector((state) => state.gameReducer.oneGame);

  useEffect(() => {
    axios.get(`${backend}/games/${id}`).then(({ data }) => {
      dispatch({
        type: 'GET_ONE_GAME',
        data,
      });
    });
  }, [dispatch]);

  return (
    <CartridgeWrapper>
      <GameImg src={oneGame.thumbnail} alt={oneGame.name} />
      <div>
        <Title>Auteur :</Title>
        <Content>{oneGame.author}</Content>
      </div>
      <div>
        <Title>Thèmes :</Title>
        <Content>{oneGame.themes}</Content>
      </div>
      <div>
        <Title>Editeur :</Title>
        <Content>{oneGame.editor}</Content>
      </div>
      <div>
        <Title>Nombre de joueurs :</Title>
        <Content>{oneGame.nb_players}</Content>
      </div>
      <div>
        <Title>Illustrateur :</Title>
        <Content>{oneGame.illustrator}</Content>
      </div>
      <div>
        <Title>Durée :</Title>
        <Content>{oneGame.time} minutes</Content>
      </div>
    </CartridgeWrapper>
  );
};

GameCartridge.propTypes = {
  id: PropTypes.number.isRequired,
};

export default GameCartridge;
