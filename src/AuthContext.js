// import React, { createContext, useState, useContext } from "react";

// const AuthContext = createContext();

// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userProfile, setUserProfile] = useState(null);

//   const login = (userData) => {
//     setIsLoggedIn(true);
//     setUserProfile(userData);
//   };

//   const logout = () => {
//     setIsLoggedIn(false);
//     setUserProfile(null);
//   };

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, userProfile, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
