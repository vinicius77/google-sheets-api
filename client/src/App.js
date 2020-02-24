import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar';
import StudentsList from './components/StudentsList';
import CreateStudent from './components/CreateStudent';

import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { GlobalProvider } from './context/GlobalState';
import StudentsListComponent from './components/StudentsListComponent';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <div className="App">
          <AppNavbar />
          <Switch>
            <Route path="/" exact component={StudentsList} />
            <Route path="/dummy" component={StudentsListComponent} />
            <Route path="/create" exact component={CreateStudent} />
          </Switch>

          <Footer />
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
