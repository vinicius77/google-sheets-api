import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar';
import StudentsList from './components/StudentsList';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <AppNavbar />
      <StudentsList />
      <Footer />
    </div>
  );
}

export default App;
