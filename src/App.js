import './App.css';
import routes from './routes/';
import { Switch, Route } from 'react-router-dom';
import TransactionPage from './components/HomeTab/TransactionPage';
import LoginView from './views/LoginView';
import RegistrationView from './views/RegistartionView';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          {/* <TransactionPage /> */}
          {/* <Route exact path={routes.home} component={HomeView} />  */}
           <Route exact path={routes.login} component={LoginView} />
            <Route exact path={routes.register} component={RegistrationView} />
            {/* <Route exact path={routes.diagram} component={DiagramView} /> */}
        </Switch>
      </header>
    </div>
  );
}

export default App;
