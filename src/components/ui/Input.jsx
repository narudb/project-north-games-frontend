import styled from 'styled-components';

const InputStyle = styled.input`
  width: 90%;
  height: 30px;
  border-radius: 5px;
  font-size: 14px;
  outline-color: ${(props) => props.theme.colors.secondary};
  padding: 3px;
  border: none;
`;

export default InputStyle;
