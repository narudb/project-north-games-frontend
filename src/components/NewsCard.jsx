import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const CardWrapper = styled.div`
  width: 230px;
  height: 168px;
  background: linear-gradient(
    ${(props) => props.theme.colors.newsCardGradient}
  );
  border-radius: 5px;
  overflow: hidden;
  margin-top: 20px;
  margin-right: 20px;
`;

const CardImg = styled.div`
  width: 100%;
  height: 92px;
  background-color: gray;
  overflow: hidden;
`;

const NewsImg = styled.img`
  width: 100%;
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

  useEffect(() => {
    const fetchCardsData = () => {
      axios.get(url).then((res) => setCardsData(res.data));
    };
    fetchCardsData();
  }, []);

  return (
    <>
      <CardContainer>
        {cardsData
          .map((card) => {
            return (
              <Link to={`/news/${card.id}`}>
                <CardWrapper key={card.id}>
                  <CardImg>
                    <NewsImg src={card.pictureUrl} alt="news-img" />
                  </CardImg>
                  <TextWrapper>
                    <Title>{card.title}</Title>
                    <TextStyle>{card.contenText}</TextStyle>
                  </TextWrapper>
                </CardWrapper>
              </Link>
            );
          })
          .slice(0, 3)}
      </CardContainer>
    </>
  );
};

export default NewsCard;
