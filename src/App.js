import { lazy, Suspense } from 'react';
import { Switch } from 'react-router-dom';
import './App.css';
// import Ballance from './components/Balance';
import DashBoardPage from './views/DashboardPage';
// import PrivateRouter from './components/PrivateRouter';
// import PublicRouter from './components/PublicRouter';

// import routes from './routes/';
import TransactionPage from './components/HomeTab/TransactionPage';
import DiagramTab from './components/DiagramTab';
import HomeView from './views/HomeView';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DashBoardPage />
        <DiagramTab />
        <TransactionPage />
        <Switch>
          {/* <Route exact path={routes.home} component={HomeView} />
          <Route exact path={routes.login} component={LoginView} />
          <Route exact path={routes.register} component={RegistrationView} />
          <Route exact path={routes.diagram} component={DiagramView} /> */}
        </Switch>
      </header>
    </div>
  );
}

export default App;
