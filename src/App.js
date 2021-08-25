// import { lazy } from 'react';
import './App.css';
import Currency from './components/Currency';
import Ballance from './components/Balance';
import Header from './components/Header';
// import DashBoardPage from './views/DashboardPage';

// const DashboardPage = lazy(() =>
//   import('./views/DashboardPage' /* webpackChunkName: "dashboard-page" */),
// );

import routes from './routes/';
import { Switch, Route } from 'react-router-dom';
import TransactionPage from './components/HomeTab/TransactionPage';
import DiagramTab from './components/DiagramTab';
// import HomeView from './views/HomeView';
import RegistrationView from '../src/views/RegistartionView'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <DiagramTab />
        <Ballance />
        <Currency />
        <TransactionPage />
      </header> 
        <Switch>
          {/* <Route exact path={routes.home} component={HomeView} />
          {/* <Route exact path={routes.login} component={LoginView} /> */}
        <Route exact path={routes.register} component={RegistrationView} />
            {/* <Route exact path={routes.diagram} component={DiagramView} />  */}
        </Switch>
    </div>
  );
}

export default App;
