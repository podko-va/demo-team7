import React, { createContext, useState } from "react";
import axios from "axios";

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("token") || null);
  
    const API_URL = "http://localhost:8000/api/v1/events";
  
    // Fetch all events
    const getAllEvents = async () => {
      try {
        const response = await axios.get(API_URL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        return response.data;
      } catch (error) {
        console.error("Error fetching events:", error);
        throw error.response.data.message;
      }
    };
  
    // Create a new event
    const createEvent = async (eventData) => {
        try {
          const response = await axios.post(
            'http://localhost:8000/api/v1/events', 
            eventData,
            {
              headers: {
                Authorization: `Bearer ${token}`, // Add any required headers
              },
              withCredentials: true, // Enable cookies for this request
            }
          );
          return response.data; // Return the response data from the API
        } catch (error) {
          console.error("Error creating event:", error);
          throw error.response?.data?.message || "Failed to create event.";
        }
      };
  
    // Update an existing event
    const updateEvent = async (id, updateData) => {
      try {
        const response = await axios.put(`${API_URL}/${id}`, updateData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        return response.data;
      } catch (error) {
        console.error("Error updating event:", error);
        throw error.response.data.message;
      }
    };
  
    // Delete an event
    const deleteEvent = async (id) => {
      try {
        await axios.delete(`${API_URL}/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } catch (error) {
        console.error("Error deleting event:", error);
        throw error.response.data.message;
      }
    };
  
    return (
      <EventContext.Provider
        value={{
          user,
          token,
          getAllEvents,
          createEvent,
          updateEvent,
          deleteEvent,
        }}
      >
        {children}
      </EventContext.Provider>
    );
  };
  