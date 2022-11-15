import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwtDecode from "jwt-decode";
import {
    GET_ERRORS,
    USER_LOADING,
    SET_CURRENT_USER
} from "./types"
//import { use } from "passport/lib";

//register user
export const registerUser = (userData , history) => dispatch => {
    axios
    .post("/api/users/register" , userData)
    .then(res => history.push("/login")) //redirect into login
    .catch( err => dispatch({
        type : GET_ERRORS,
        payload : err.response.data
    })
   );
}; 


//login - get user token
export const loginUser = userData => dispatch => {
    axios
    .post ("/api/users/login" , userData)
    .then(
        res => {
             //save to localstorage

            //set token to local storage
            const {token} = res.data;
            localStorage.setItem("jwtToken" , token);
            //set token to auth header
            setAuthToken(token);
            //decode token to get user data 
            const decoded = jwtDecode(token);
            //set current user
            dispatch(setCurrentUser(decoded));
        }
    )
    .catch(err =>
        dispatch({
            type:GET_ERRORS,
            payload: err.response.data
        })
    );
};

//set loged in user 
 export const setCurrentUser = decoded => {
     return{
         type: SET_CURRENT_USER,
         payload : decoded
     };
 };

 //user loading
export const  setUserLoading = () => {
    return{
        type: USER_LOADING
    };
};

//log user out 
export const  logoutUser = () => dispatch => {
    //remove token from localstorage
    localStorage.removeItem("jwtToken");
    //remove auth header for future requests
    setAuthToken(false);
    //Set current user to empty object {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
};