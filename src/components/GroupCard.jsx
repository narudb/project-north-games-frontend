import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import axios from 'axios';
import globalTheme from '../theme/globalTheme';
import StyledLink from './ui/StyledLink';
import { backend } from '../conf';

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 35vh;
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
  grid-template-rows: 1fr 1fr 1fr;
  grid-column-gap: 1px;
  grid-template-areas:
    'img title title'
    'img text text'
    'img author author';
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

const GroupImg = styled.img`
  grid-area: img;
  width: 80px;
  height: 80px;
`;

const TextWrapper = styled.div`
  padding: 10px 5px;
  color: ${(props) => props.theme.colors.mediumGray};
  p {
    font-size: 11px;
    line-height: 15px;
  }
`;

const Title = styled.h3`
  grid-area: title;
  font-size: 13px;
  line-height: 18px;
  color: ${(props) => props.theme.colors.secondary};
  white-space: normal;
  text-transform: uppercase;
  width: 180px;
  max-height: 42px;
`;

const StyledPara = styled.p`
  margin-right: 191px;
`;

const GroupCard = () => {
  const dispatch = useDispatch();
  const groupsData = useSelector((state) => state.groupsReducer.groupsData);
  const authToken = useSelector((state) => state.userReducer.authData.token);

  useEffect(() => {
    axios
      .get(`${backend}/groups`, {
        headers: {
          Authorization: `Bearer ${authToken || null}`,
        },
      })
      .then(({ data }) => {
        dispatch({
          type: 'GET_ALL_GROUPS',
          data,
        });
      });
  }, [dispatch, authToken]);

  return (
    <>
      <CardContainer>
        {groupsData.length > 0 ? (
          groupsData
            .map((group) => {
              return (
                <StyledLink to={`/groups/${group.id}`} key={group.id}>
                  <CardWrapper>
                    <CardImg>
                      <GroupImg
                        src={group.image || globalTheme.pictures.group}
                        alt={group.name}
                      />
                    </CardImg>
                    <TextWrapper>
                      <Title>{group.name}</Title>
                      <p>{group.maxPLayer} membres</p>
                    </TextWrapper>
                  </CardWrapper>
                </StyledLink>
              );
            })
            .slice(0, 10)
        ) : (
          <StyledPara>Pas de groupe pour le moment</StyledPara>
        )}
      </CardContainer>
    </>
  );
};

export default GroupCard;
