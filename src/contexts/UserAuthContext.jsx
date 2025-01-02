import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserAuthContext = createContext();

export const UserAuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  //console.log("Risqua ", localStorage);
  const API_URL = "http://localhost:8000/api/v1";

  // useEffect(() => {
  //   const validateToken = async () => {
  //     if (token) {
  //       try {
  //         console.log("Risqua Token is valid. 1"); // Debugging
  //         await axios.get(`${API_URL}/validate-token`, {
  //           headers: { Authorization: `Bearer ${token}` },
  //         });
  //         console.log("Risqua Token is valid. 2"); // Debugging
  //       } catch (err) {
  //         console.error("Token is invalid, logging out user.");
  //         setToken(null);
  //         //localStorage.removeItem("token");
  //       }
  //     }
  //   };
  //   validateToken();
  // }, [token]);


  ///***without validate token */
  // Create a new registration
  const createRegistration = async (registrationData) => {
    if (!token) {
      throw new Error("Token is missing. Please log in.");
    }

    try {
      const response = await axios.post(
        `${API_URL}/registrations`,
        registrationData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error in createRegistration:", error.response || error);
      throw error;
    }
  };

  return (
    <UserAuthContext.Provider value={{ token, createRegistration }}>
      {children}
    </UserAuthContext.Provider>
  );
};