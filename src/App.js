import React from "react";

import "./App.css";
import Navigation from "./component/navigation/navigation";
import { Grid, Segment } from "semantic-ui-react";
import MyCourses from "./pages/my-courses";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyTeachers from "./pages/my-teachers";
import AllCourses from "./pages/all-courses";
import LK from "./pages/lk";
import { TestsPage } from "./pages/tests";

function App() {
  return (
    <Router basename="/student">
      <div className="App">
        <Grid>
          <Navigation />
          <Grid.Column width={13}>
            <Segment>
              <Switch>
                <Route path="/my-courses/">
                  <MyCourses />
                </Route>
                <Route path="/my-teachers">
                  <MyTeachers />
                </Route>
                <Route path="/all-courses">
                  <AllCourses />
                </Route>
                <Route path="/tests/:id">
                  <TestsPage />
                </Route>
                <Route path="/">
                  <LK />
                </Route>
              </Switch>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    </Router>
  );
}

export default App;
