import React from 'react';
import styled from 'styled-components';

const DivInput = styled.input`
  background-color: ${(props) => props.theme.colors.secondary};
  background-image: url(/icons/search-icon.svg);
  background-repeat: no-repeat;
  background-position: right;
  border-radius: 5px;
  width: 196.34px;
  height: 35px;
`;

export default function Searchbar() {
  return <DivInput type="text" placeholder="" />;
}
