import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';

import AsideMenu from './components/AsideMenu';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import store from './redux/store/store';
import globalTheme from './theme/globalTheme';

const PageWrapper = styled.div`
  background: linear-gradient(${(props) => props.theme.colors.gradient});
  width: 100vw;
  height: 100vh;
  color: ${(props) => props.theme.colors.primary};
  display: grid;
  grid-template-columns: 15vw 1fr 5vw;
  grid-template-rows: 15vh auto;
  grid-column-gap: 5px;
  grid-template-areas:
    'navbar navbar navbar'
    'asideMenu content .'
    'asideMenu content .'
    'asideMenu content .'
    'asideMenu content .';
`;

const Main = styled.main`
  grid-area: content;
`;

const App = () => {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={globalTheme}>
        <PageWrapper>
          <Navbar />
          <AsideMenu />
          <Main>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/login" component={Login} />
            </Switch>
          </Main>
        </PageWrapper>
      </ThemeProvider>
    </ReduxProvider>
  );
};

export default App;
