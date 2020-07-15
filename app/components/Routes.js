import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { AllCampuses } from './AllCampuses'
import AllCampuses from './AllCampuses' // we need to import the connected component instead
import AllStudents from './AllStudents';
import Navbar from './Navbar';

const Routes = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <h1>Welcome to the Margaret Hamilton Academy of JavaScript!</h1>
          <p>This seems like a nice place to get started with some Routes!</p>
          <Route exact path="/campuses" component={AllCampuses} />
          <Route exact path="/students" component={AllStudents} />
        </main>
      </div>
    </Router>
  );
};

export default Routes;
