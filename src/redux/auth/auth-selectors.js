 const getIsAuth = state => state.auth.isAuth;
 const getUsername = state => state.auth.user.name;


const authSelectors = { getIsAuth, getUsername };

export default authSelectors;