import { Fragment } from 'react';
// import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Media from 'react-media';

import Header from '../components/Header';

import MobileContainer from '../components/Container/MobilContainer';
import DesktopContainer from '../components/Container/DesktopContainer';

const DashBoardPage = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  // }, [dispatch]);
  return (
    <>
      <Header />

      <div>
        <Media
          queries={{
            small: '(max-width: 767px)',
            medium: '(min-width: 767px)',
          }}
        >
          {matches => (
            <Fragment>
              {matches.small && <MobileContainer />}

              {matches.medium && (
                <>
                  <Redirect to="/dashboard/home" />
                  <DesktopContainer />
                </>
              )}
            </Fragment>
          )}
        </Media>
      </div>
    </>
  );
};
export default DashBoardPage;
