import styled from 'styled-components';

const InputBtn = styled.input`
  padding: 8px;
  border-radius: 5px;
  width: 50%;
  font-size: 20px;
  outline: none;
  border: none;
  font-family: ${(props) => props.theme.fonts.primary};
  color: ${(props) => props.theme.colors.mediumGray};
  background-color: ${(props) => props.theme.colors.primary};
  &:hover {
    color: ${(props) => props.theme.colors.secondary};
    font-weight: bold;
  }
  &:active {
    box-shadow: inset 3px 4px 4px rgba(0, 0, 0, 0.5);
    transition: none;
  }
`;
export default InputBtn;
