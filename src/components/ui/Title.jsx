import styled from 'styled-components';

const TitleStyle = styled.h2`
  color: ${(props) => props.theme.colors.primary};
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  width: 100%;
  border-bottom: 3px solid #fff;
`;

export default TitleStyle;
