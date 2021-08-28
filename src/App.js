import { useDispatch } from 'react-redux';
import { lazy, Suspense, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import { authOperations } from './redux/auth';

import routes from './routes/';
import Loader from './components/Loader';

import PrivateRouter from './components/PrivateRouter';
import PublicRouter from './components/PublicRouter';

const HomeView = lazy(() =>
  import('./views/HomeView' /* webpackChunkName: "dashboard-page" */),
);
const RegistrationView = lazy(() =>
  import('./views/RegistrationView' /* webpackChunkName: "register-page" */),
);
const LoginView = lazy(() =>
  import('./views/LoginView' /* webpackChunkName: "login-page" */),
);



function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path={routes.register} component={RegistrationView} />
          <Route exact path={routes.login} component={LoginView} />
          <Route path={routes.home} redirectTo="/login" component={HomeView} />

        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
