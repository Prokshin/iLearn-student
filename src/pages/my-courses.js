import React, { Component } from "react";
import { Link, Route, Switch, matchPath } from "react-router-dom";
import {
  Header,
  Icon,
  Table,
  Label,
  Button,
  Progress,
  Container
} from "semantic-ui-react";
import { DataService } from "../services/data-service";
import { Course } from "./course";
import Divisions from "./divisions";

export default class MyCourses extends Component {
  data = new DataService();
  state = {
    data: []
  };
  courses = [];
  constructor(props) {
    super(props);
    this.updateInfo();
  }

  updateInfo() {
    this.data
      ._getMyCourses()
      .then(res => {
        this.courses = res.courses.map(n => {
          let pd = "В процессе";
          switch (n.progress) {
            case 0:
              pd = "Не приступал";
              break;
            case 100:
              pd = "Завершено";
              break;
          }

          return (
            <Table.Row key={n.id}>
              <Table.Cell>
                <Link to={`/my-courses/${n.name}`}>{n.name}</Link>
              </Table.Cell>
              <Table.Cell>{n._teacher}</Table.Cell>
              <Table.Cell>
                <Progress
                  percent={n._progress}
                  progress
                  indicating
                  label={pd}
                />
              </Table.Cell>
            </Table.Row>
          );
        });
      })
      .then(res => {
        console.log(res);
        this.setState({
          data: res
        });
        return res;
      });
  }
  render() {
    console.log(this.courses);
    console.log(matchPath);
    return (
      <div>
        <Header as="h1" color={"red"} textAlign="center">
          Мои курсы
        </Header>
        <h4 class="ui horizontal divider">
          <i class="angle down red icon"></i>
        </h4>
        <Switch>
          <Route path="/my-courses/:id">
            <Divisions />
          </Route>
          <Route path="/my-courses">
            <Table celled size="large">
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Курс</Table.HeaderCell>
                  <Table.HeaderCell>Преподаватель</Table.HeaderCell>
                  <Table.HeaderCell>Прогресс</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>{this.courses}</Table.Body>

              <Table.Footer>
                <Table.Row>
                  <Table.HeaderCell colSpan="3"></Table.HeaderCell>
                </Table.Row>
              </Table.Footer>
            </Table>
            <Container fluid textAlign="center">
              <Button color="teal">Добавить другие курсы</Button>
            </Container>
          </Route>
        </Switch>
      </div>
    );
  }
}
