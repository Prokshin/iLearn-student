import React from "react";

import "./App.css";
import Navigation from "./component/navigation/navigation";
import { Grid, Segment } from "semantic-ui-react";
import MyCourses from "./pages/my-courses";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyTeachers from "./pages/my-teachers";

function App() {
  return (
    <Router>
      <div className="App">
        <Grid>
          <Navigation />
          <Grid.Column width={13}>
            <Segment>
              <Switch>
                <Route path="/my-courses">
                  <MyCourses />
                </Route>
                <Route path="/my-teachers">
                  <MyTeachers />
                </Route>
                <Route path="/request">gg</Route>
                <Route path="/examine">ex</Route>
                <Route path="/">gg</Route>
              </Switch>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    </Router>
  );
}

export default App;
