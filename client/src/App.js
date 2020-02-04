import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar';
import StudentsList from './components/StudentsList';

function App() {
  return (
    <div className='App'>
      <AppNavbar />
      <StudentsList />
    </div>
  );
}

export default App;
