import styled from 'styled-components';

const FormTitleStyle = styled.h2`
  margin-top: 20px;
  color: ${(props) => props.theme.colors.primary};
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  width: 100%;
`;
export default FormTitleStyle;
