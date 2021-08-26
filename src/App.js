import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import routes from './routes/';
// import PrivateRouter from './components/PrivateRouter';
// import PublicRouter from './components/PublicRouter';
import HomeView from './views/HomeView';
import RegistrationView from './views/RegistartionView' 
import LoginView from './views/LoginView'; 

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"/> */}
        <Switch>
          <Route exact path={routes.register} component={RegistrationView} />
          <Route exact path={routes.login} component={LoginView} />
          <Route
            path={routes.home}
            redirectTo="/login"
            component={HomeView}
          />

        </Switch>
    </div>
  );
}

export default App;
