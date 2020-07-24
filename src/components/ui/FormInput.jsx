import styled from 'styled-components';

const Input = styled.input`
  width: 90%;
  height: 30px;
  border-radius: 5px;
  font-size: 14px;
  font-family: ${(props) => props.theme.fonts.primary};
  outline-color: ${(props) => props.theme.colors.secondary};
  padding: 4px;
  margin: 10px;
  border: none;
  &::placeholder {
    font-style: italic;
  }
`;
export default Input;
