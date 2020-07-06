import React from 'react';
import styled from 'styled-components';

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
  return (
    <CardWrapper>
      <Img />
      {/* <img alt="image" /> */}
      <TextWrapper>
        <Title>Title</Title>
        <TextStyle>
          Lorem Ipsum has been the industrys standard dummy text ever since the
          1500s... Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Culpa enim sunt earum reprehenderit accusantium consectetur nihil
          dolore aspernatur! Nostrum amet nobis cum, provident tenetur placeat
          recusandae quo laudantium aperiam distinctio?
        </TextStyle>
      </TextWrapper>
    </CardWrapper>
  );
};

export default NewsCard;
