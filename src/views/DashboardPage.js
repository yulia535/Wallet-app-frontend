import Header from '../components/Header';

const DashBoardPage = () => {
  return (
    <>
      <Header />

      <div>
        {/* <Media
        queries={{
          small: '(max-width: 767px)',
          medium: '(min-width: 767px)',
        }} */}
        {/* >
        {matches => (
          <Fragment>
            {matches.small && <MobileMainContainer />}

            {matches.medium && (
              <>
                <Redirect to="/dashboard/home" />
                <DesktopMainContainer />
              </>
            )}
          </Fragment>
        )}
      </Media> */}
      </div>
    </>
  );
};
export default DashBoardPage;
