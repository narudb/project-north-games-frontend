import styled from 'styled-components';

const Button = styled.button`
  padding: 8px;
  width: 60%;
  justify-self: center;
  align-self: center;
  border-radius: 5px;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border: none;
  color: ${(props) => props.theme.colors.secondary};
  background-color: ${(props) => props.theme.colors.primary};
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.primary};
    box-shadow: inset 3px 4px 4px rgba(255, 255, 255, 0.5);
  }
  &:active {
    box-shadow: inset 3px 4px 4px rgba(0, 0, 0, 0.5);
    transition: none;
  }
`;
export default Button;
