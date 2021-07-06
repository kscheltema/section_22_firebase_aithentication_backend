import React, {useState} from 'react';

const AuthContext = React.createContext({
token: '',
isLoggedIn: false,
login: (token) => {},
logout: () => {},
});

export const AuthContextProvider = (props) => {
const [token, setToken] = useState(null);
const userIsLoggedIn = !!token; //converts a truthy or falsy value into Boolean

const loginHandler = (token) => {
  setToken(token);
};

const loggedOutHandler = () => {
  setToken(null);
};

const contextValue = {
token: token,
isLoggedIn: userIsLoggedIn,
login:loginHandler,
logout: loggedOutHandler
};

  return (<AuthContext.Provider value={contextValue}>
    {props.children}</AuthContext.Provider>);
};

export default AuthContext;