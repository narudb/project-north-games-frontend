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
  display: flex;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 5px;
  overflow: hidden;
  margin-top: 20px;
  margin-right: 20px;
`;

const CardImg = styled.div`
  width: 100%;
  height: 171px;
  background-color: gray;
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

const GroupCard = () => {
  const dispatch = useDispatch();
  const groupsData = useSelector((state) => state.groupsReducer.groupsData);

  const getAllGroups = () => {
    axios.get('/groups').then(({ data }) => {
      dispatch({
        type: 'GET_ALL_GROUPS',
        data,
      });
    });
  };
  useEffect(() => {
    getAllGroups();
  }, [dispatch]);

  return (
    <>
      <CardContainer>
        {groupsData
          .map((group) => {
            return (
              <CardWrapper key={group.id}>
                <CardImg>
                  <NewsImg src={group.image} alt="round-img" />
                </CardImg>
                <TextWrapper>
                  <Title>{group.title}</Title>
                  <Date>{group.max_players}</Date>
                  <Adress />
                </TextWrapper>
              </CardWrapper>
            );
          })
          .slice(0, 3)}
      </CardContainer>
    </>
  );
};

export default GroupCard;
