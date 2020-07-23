import React from 'react';
import styled from 'styled-components';

const CartridgeWrapper = styled.div`
  border: solid 1px red;
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

const GameCartridge = () => {
  return (
    <CartridgeWrapper>
      <GameImg
        src="https://www.ac-deco.com/72494-thickbox_default/jeu-de-strategie-horreur-a-arkham-derniere-heure.jpg"
        alt="game img"
      />
      <div>
        <Title>Auteur :</Title>
        <Content>Toto</Content>
      </div>
      <div>
        <Title>Thèmes :</Title>
        <Content>Toto</Content>
      </div>
      <div>
        <Title>Editeur :</Title>
        <Content>Toto</Content>
      </div>
      <div>
        <Title>Nombre de joueurs :</Title>
        <Content>Toto</Content>
      </div>
      <div>
        <Title>Illustrateur :</Title>
        <Content>Toto</Content>
      </div>
      <div>
        <Title>Durée :</Title>
        <Content>Toto</Content>
      </div>
    </CartridgeWrapper>
  );
};

export default GameCartridge;
