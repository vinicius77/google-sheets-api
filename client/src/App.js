// React, Hooks and Router
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalState';
// CSS
import './App.css';
// Components
import AppNavbar from './components/AppNavbar';
import Footer from './components/Footer';
import StudentsList from './components/StudentsList';
import CreateStudent from './components/CreateStudent';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <div className="App">
          <AppNavbar />
          <Switch>
            <Route path="/" exact component={StudentsList} />
            <Route path="/create" exact component={CreateStudent} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
