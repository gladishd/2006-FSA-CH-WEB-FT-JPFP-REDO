import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { AllCampuses } from './AllCampuses'
import AllCampuses from './AllCampuses' // we need to import the connected component instead
import AllStudents from './AllStudents';
import Navbar from './Navbar';
import Campus from './Campus';
import Student from './Student';
import CampusForm from './CampusForm'

const Routes = () => {
  return (
    <Router>
      <div>
        <nav id="navBarId">
          <Navbar />
        </nav>

        <main>
          <h1>Welcome to the Margaret Hamilton Academy of JavaScript!</h1>
          <p>With routing, we're able to get all campuses and students!</p>
          {/* these aren't visible */}
          <Route exact path="/campuses" component={AllCampuses} />
          <Route exact path="/students" component={AllStudents} />
          <Route exact path="/students/:studentId" component={Student} />
          <Route exact path="/campuses/:campusId" component={Campus} />
          <Route exact path="/new" component={CampusForm} />
        </main>
      </div>
    </Router>
  );
};

export default Routes;
