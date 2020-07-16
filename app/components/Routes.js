import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { AllCampuses } from './AllCampuses'
import AllCampuses from './AllCampuses' // we need to import the connected component instead
import AllStudents from './AllStudents';
import Navbar from './Navbar';
import Campus from './Campus';
import Student from './Student';

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
          <Route exact path="/campuses" component={AllCampuses} />
          <Route exact path="/students" component={AllStudents} />
          <Route exact path="/studentTemporary" component={Student} />
          <Route exact path="/campuses/:campusId" component={Campus} />
        </main>
      </div>
    </Router>
  );
};

export default Routes;
