import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AllCampuses } from './AllCampuses'
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
        </main>
      </div>
    </Router>
  );
};

export default Routes;
