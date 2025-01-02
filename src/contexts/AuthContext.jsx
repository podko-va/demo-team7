import React, { createContext, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  const API_URL = "http://localhost:8000/api/v1/users";

  // Register a new user
  const registerUser = async (userData) => {
    try {
      const response = await axios.post(`${API_URL}/register`, userData);
      console.log("Response: ", response);
      setUser(response.data.user);
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      return response.data;
    } catch (error) {
      console.error("Error during registration:", error);
      throw error.response?.data?.message || "Registration failed.";
    }
  };

  // Login a user
  const login = async (credentials) => {
    try {
      const response = await axios.post(`${API_URL}/login`, credentials);
      setUser(response.data.user);
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      return response.data;
    } catch (error) {
      console.error("Error during login:", error);
      throw error.response?.data?.message || "Login failed.";
    }
  };

  /*   const login = async (credentials) => {
    try {
      const response = await axios.post(`${API_URL}/login`, credentials);
      Cookies.set("token", response.data.token); 
      setUser(response.data.user);
      return response.data;
    } catch (error) {
      console.error("Error during login:", error);
      throw error.response?.data?.message || "Login failed.";
    }
  }; */

  // Logout a user
  const logout = async () => {
    try {
      await axios.post(`${API_URL}/logout`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(null);
      setToken(null);
      localStorage.removeItem("token");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  // Get all users
  const getAllUsers = async () => {
    try {
      const response = await axios.get(API_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error.response?.data?.message || "Failed to fetch users.";
    }
  };

  // Update a user by ID
  const updateUser = async (id, userData) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, userData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.user;
    } catch (error) {
      console.error("Error updating user:", error);
      throw error.response?.data?.message || "Failed to update user.";
    }
  };

  // Delete a user by ID
  const deleteUser = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return { message: "User deleted successfully." };
    } catch (error) {
      console.error("Error deleting user:", error);
      throw error.response?.data?.message || "Failed to delete user.";
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        registerUser,
        login,
        logout,
        getAllUsers,
        updateUser,
        deleteUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
