import React from "react";
import { Switch } from 'react-router';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AllCampuses from './AllCampuses' // we need to import the connected component instead
import AllStudents from './AllStudents';
import Navbar from './Navbar';
import Campus from './Campus';
import Student from './Student';
import CampusForm from './CampusForm';
import StudentForm from './StudentForm'
import Main from './Main';
import NotFound from './NotFound';

const Routes = () => {
  return (
    <Router>
      <div>
        <nav id="navBarId">
          <Navbar />
        </nav>
        <main>
          <h1 style={{ 'font-family': 'georgia, serif' }}>Welcome to the Margaret Hamilton Academy of JavaScript!</h1>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/campuses" component={AllCampuses} />
            <Route exact path="/students" component={AllStudents} />
            <Route exact path="/students/:studentId" component={Student} />
            <Route exact path="/campuses/:campusId" component={Campus} />
            <Route exact path="/newCampus" component={CampusForm} />
            <Route exact path="/newStudent" component={StudentForm} />
            <Route path="*" component={NotFound} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default Routes;
