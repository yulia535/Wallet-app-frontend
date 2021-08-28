//import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import routes from './routes/';
import PrivateRouter from './components/PrivateRouter';
import PublicRouter from './components/PublicRouter';
import HomeView from './views/HomeView';
import RegistrationView from './views/RegistrationView';
import LoginView from './views/LoginView'; 

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"/> */}
        <Switch>
          <PublicRouter path={routes.register}  restricted redirectTo={routes.home} component={RegistrationView}/>
          <PublicRouter path={routes.login}  restricted redirectTo={routes.home} component={LoginView}/>
          
          <PrivateRouter
            path={routes.home}
            redirectTo="/login"
            component={HomeView}
          />

        </Switch>
    </div>
  );
}

export default App;
