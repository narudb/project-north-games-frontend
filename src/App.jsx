import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import store from './redux/store/store';
import globalTheme from './theme/globalTheme';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={globalTheme}>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/login" component={Login} />
        </Switch>
      </ThemeProvider>
    </ReduxProvider>
  );
};

export default App;
