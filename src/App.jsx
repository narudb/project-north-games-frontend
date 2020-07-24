import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AsideMenu from './components/AsideMenu';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import NewsPage from './pages/NewsPage';
import RoundsPage from './pages/RoundsPage';
import GroupsPage from './pages/GroupsPage';
import EventsPage from './pages/EventsPage';
import globalTheme from './theme/globalTheme';

const PageWrapper = styled.div`
  font-family: ${(props) => props.theme.fonts.primary};
  background: linear-gradient(${(props) => props.theme.colors.bckgGradient});
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  color: ${(props) => props.theme.colors.primary};
  display: grid;
  grid-template-columns: 10vw 1fr 30px;
  grid-template-rows: 15vh auto;
  grid-column-gap: 5px;
  grid-template-areas:
    'navbar navbar navbar'
    'asideMenu main .'
    'asideMenu main .'
    'asideMenu main .'
    'asideMenu main .';
`;

const Main = styled.main`
  grid-area: main;
`;

const App = () => {
  return (
    <ThemeProvider theme={globalTheme}>
      <PageWrapper>
        <Navbar />
        <AsideMenu />
        <Main>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route path="/news/:id" component={NewsPage} />
            <Route path="/rounds/:id" component={RoundsPage} />
            <Route path="/groups/:id" component={GroupsPage} />
            <Route path="/events/:id" component={EventsPage} />
          </Switch>
        </Main>
        <ToastContainer
          position="bottom-left"
          autoClose={6000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </PageWrapper>
    </ThemeProvider>
  );
};

export default App;
