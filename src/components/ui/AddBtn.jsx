import styled from 'styled-components';

const AddBtn = styled.button`
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  color: ${(props) => props.theme.colors.secondary};
  background-color: ${(props) => props.theme.colors.primary};
  border: 2px solid #008cba;
  outline: none;

  :hover {
    color: ${(props) => props.theme.colors.dark};
    background-color: ${(props) => props.theme.colors.greyButton};
  }
`;
export default AddBtn;
