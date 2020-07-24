import styled from 'styled-components';

const InputContent = styled.textarea`
  width: 90%;
  height: 50px;
  border-radius: 5px;
  font-size: 14px;
  font-family: ${(props) => props.theme.fonts.primary};
  outline-color: ${(props) => props.theme.colors.secondary};
  padding: 4px;
  border: none;
  &::placeholder {
    font-style: italic;
  }
  margin: 10px;
  resize: none;
  overflow: auto;
`;
export default InputContent;
