import React, { Component } from "react";
import {
  Header,
  Icon,
  Table,
  Label,
  Button,
  Card,
  Container
} from "semantic-ui-react";

import { DataService } from "../services/data-service";
import { Link, withRouter, Route, Switch } from "react-router-dom";
import Tcourse from "../component/t-course/t-course";
class MyTeachers extends Component {
  data = new DataService();
  state = {
    data: []
  };
  teachers = [];
  constructor(props) {
    super(props);
    this.updateInfo();
  }
  updateInfo() {
    this.data
      .getMyTeachers()
      .then(res => {
        this.teachers = res.map(n => {
          return (
            <Card
              header={n.name}
              description={n.description}
              extra={
                <Link to={`${this.props.match.path}/${n.id}`}>
                  <Icon name="book" /> {n.coursesCount} {"курса "}
                </Link>
              }
            />
          );
        });
      })
      .then(res => {
        this.setState({});
      });
  }
  render() {
    return (
      <div>
        <Header as="h1" color={"red"} textAlign="center">
          Преподаватели
        </Header>
        <h4 class="ui horizontal divider">
          <i class="angle down red icon"></i>
        </h4>
        <Switch>
          <Route path={`${this.props.match.url}/:id`}>
            <Tcourse />
          </Route>
          <Route path={this.props.match.url}>
            <Card.Group textAlign="center">{this.teachers}</Card.Group>
          </Route>
        </Switch>
      </div>
    );
  }
}

const T = withRouter(MyTeachers);
export default T;
