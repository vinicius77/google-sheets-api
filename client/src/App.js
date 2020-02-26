import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar';

import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { GlobalProvider } from './context/GlobalState';
import StudentsList from './components/StudentsList';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <div className="App">
          <AppNavbar />
          <Switch>
            <Route path="/" component={StudentsList} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
