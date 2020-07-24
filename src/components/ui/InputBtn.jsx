import styled from 'styled-components';

const InputBtn = styled.input`
  padding: 8px;
  border-radius: 5px;
  font-size: 14px;
  outline: none;
  border: none;
  color: ${(props) => props.theme.colors.mediumGray};
  background-color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.primary};
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
