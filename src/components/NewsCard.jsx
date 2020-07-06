import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const CardWrapper = styled.div`
  width: 230px;
  height: 168px;
  background: linear-gradient(
    ${(props) => props.theme.colors.newsCardGradient}
  );
  border-radius: 5px;
  overflow: hidden;
`;

const Img = styled.div`
  width: 100%;
  height: 92px;
  background-color: gray;
`;

const TextWrapper = styled.div`
  padding: 10px 15px;
  color: ${(props) => props.theme.colors.primary};
  text-transform: uppercase;
`;

const Title = styled.h3`
  font-size: 18px;
  line-height: 24px;
`;

const TextStyle = styled.p`
  white-space: nowrap;
  font-size: 12px;
  line-height: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const NewsCard = () => {
  const [cardsData, setCardsData] = useState([]);

  const url = '/news';

  const fetchCardsData = () => {
    axios.get(url).then((res) => setCardsData(res.data));
  };

  useEffect(() => {
    fetchCardsData();
  }, []);
  return (
    <div>
      {cardsData.map((card) => {
        return (
          <CardWrapper key={card.id}>
            <Img>{/* <img src={card.picture_url} alt="image" /> */}</Img>
            <TextWrapper>
              <Title>{card.title}</Title>
              <TextStyle>{card.content}</TextStyle>
            </TextWrapper>
          </CardWrapper>
        );
      })}
    </div>
  );
};

export default NewsCard;
