import styled from 'styled-components';

export default styled.div`
  background: linear-gradient(${(props) => props.theme.colors.gradient});
  width: 100vw;
  height: 100vh;
  color: ${(props) => props.theme.colors.primary};
`;
