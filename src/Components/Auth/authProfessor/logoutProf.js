import {setAuthToken } from '../setAuthToken';
//import {setCurrentUser} from './setCurrentUser';
// Log user out
export const logoutProf = () => {
    // Remove token from local storage
    localStorage.removeItem("jwtTokenProf");
    // Remove auth header for future requests
    setAuthToken(false);
    localStorage.clear();
    // Set current user to empty object {} which will set isAuthenticated to false
    //dispatch(setCurrentUser({}));
  };
