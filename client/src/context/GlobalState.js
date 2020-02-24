import React, { createContext, useReducer } from 'react';
import StudentReducer from './StudentReducer';

const initialState = {
  students: [
    {
      id: 1,
      studentname: 'Vinicius',
      gender: 'Male',
      classlevel: '1. Junior',
      homestate: 'SP',
      major: 'BsC',
      extracurricularactivity: 'Football'
    },
    {
      id: 2,
      studentname: 'Hanna',
      gender: 'Female',
      classlevel: '2. Sophmore',
      homestate: 'HE',
      major: 'Business',
      extracurricularactivity: 'Games'
    }
  ]
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(StudentReducer, initialState);

  // Actions
  const deleteStudent = id => {
    dispatch({ type: 'DELETE_STUDENT', payload: id });
  };

  const addStudent = student => {
    dispatch({ type: 'ADD_STUDENT', payload: student });
  };

  return (
    <GlobalContext.Provider
      value={{ students: state.students, deleteStudent, addStudent }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
