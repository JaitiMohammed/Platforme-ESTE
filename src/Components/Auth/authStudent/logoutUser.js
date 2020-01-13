import {setAuthToken } from '../setAuthToken';
//import {setCurrentUser} from './setCurrentUser';
// Log user out
export const logoutUser = () => {
    // Remove token from local storage
    localStorage.removeItem("jwtTokenStudent");
    // Remove auth header for future requests
    setAuthToken(false);
    localStorage.clear();
    // Set current user to empty object {} which will set isAuthenticated to false
    //dispatch(setCurrentUser({}));
  };
