import React, { createContext, useReducer } from 'react';
import StudentReducer from './StudentReducer';
import axios from 'axios';

const initialState = {
  students: [],
  error: null,
  loading: true
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(StudentReducer, initialState);

  // Actions
  const getStudents = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/v2/students');
      dispatch({ type: 'GET_STUDENTS', payload: response.data.data });
    } catch (error) {
      dispatch({ type: 'GET_ERROR', payload: `Error: ${error}` });
    }
  };

  const addStudent = async student => {
    try {
      const newStudent = await student;
      const response = await axios.post(
        'http://localhost:5000/api/v2/students',
        newStudent
      );

      dispatch({ type: 'ADD_STUDENT', payload: response.data });
    } catch (error) {
      dispatch({ type: 'GET_ERROR', payload: `Error: ${error}` });
    }
  };

  const deleteStudent = async id => {
    try {
      await axios.delete(
        `http://localhost:5000/api/v2/students/delete/${id}`,
        id
      );

      dispatch({ type: 'DELETE_STUDENT', payload: id });
    } catch (error) {
      dispatch({ type: 'GET_ERROR', payload: `Error: ${error}` });
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        error: state.error,
        loading: state.loading,
        students: state.students,
        deleteStudent,
        addStudent,
        getStudents
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
