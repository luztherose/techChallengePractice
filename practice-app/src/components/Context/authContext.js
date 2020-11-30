import React from "react";

const AuthContext = React.createContext();

export const AuthProvider = AuthContext.Provider;

export const AuthConsumer = AuthContext.Consumer;

export const getAuthToken = () => localStorage.getItem('token');

export const setAuthToken = (token) => localStorage.setItem('token', token);

export const logout = () => localStorage.removeItem('token');

export const isUserLogged = () => getAuthToken() !== null;
