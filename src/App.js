// import { lazy } from 'react';
import './App.css';
import Currency from './components/Currency';
import Ballance from './components/Balance';
// import DashBoardPage from './views/DashboardPage';

// const DashboardPage = lazy(() =>
//   import('./views/DashboardPage' /* webpackChunkName: "dashboard-page" */),
// );

function App() {
  return (
    <div className="App">
      <Ballance />
      <Currency />
    </div>
  );
}

export default App;
