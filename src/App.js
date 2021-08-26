// import { lazy, Suspense } from 'react';
import {Route, Switch } from 'react-router-dom';
import './App.css';
import routes from './routes/';
// import Currency from './components/Currency';
// import Ballance from './components/Balance';
// import PrivateRouter from './components/PrivateRouter';
// import PublicRouter from './components/PublicRouter';
// import Header from './components/Header';
// import TransactionPage from './components/HomeTab/TransactionPage';
// import DiagramTab from './components/DiagramTab';
// import HomeView from './views/HomeView';
// import DashBoardPage from './views/DashboardPage';
import RegistrationView from './views/RegistrationView'
import LoginView from './views/LoginView'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"/>
     <Header />
        <DashBoardPage /> */}
        <Switch>
          {/* <Route exact path={routes.home} component={HomeView} /> */}
          <Route exact path={routes.login} component={LoginView} />
          <Route exact path={routes.register} component={RegistrationView} />
          {/* <Route exact path={routes.diagram} component={DiagramView} />  */}
        </Switch>
    </div>
  );
}

export default App;
