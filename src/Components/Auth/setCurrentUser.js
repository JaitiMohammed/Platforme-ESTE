
//import jwt_decode from "jwt-decode";
import { SET_CURRENT_USER} from "./Types";

// Set logged in user
export const setCurrentUser = decoded => {
    return {
      type: SET_CURRENT_USER,
      payload: decoded
    };
  };