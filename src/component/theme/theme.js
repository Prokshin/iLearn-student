import React, { Component } from "react";
import { Link, Route, Switch, withRouter } from "react-router-dom";
import {
  Header,
  Icon,
  Table,
  Label,
  Button,
  Progress,
  Container
} from "semantic-ui-react";
import { DataService } from "../../services/data-service";

class _Tasks extends Component {
  data = new DataService();
  state = {
    data: [],
    course_id: this.props.course_id,
    theme_id: this.props.match.params.id
  };
  lectures = [];
  tests = [];
  constructor(props) {
    super(props);
    this.updateInfo();
  }

  updateInfo() {
    this.data
      .getTasks()
      .then(res => {
        const status = res.statuses;

        this.lectures = res.lectures.map(n => {
          let ic = "close";
          let c = "red";
          if (status["l-status"].find(r => r === n.id) !== undefined) {
            ic = "checkmark";
            c = "green";
          }
          return (
            <Table.Row key={n.id}>
              <Table.Cell>
                <Link to={`${document.location.pathname.slice(8)}/${n.id}`}>
                  {n.name}
                </Link>
              </Table.Cell>

              <Table.Cell width="1" textAlign="center">
                <Icon name={ic} color={c} />
              </Table.Cell>
            </Table.Row>
          );
        });
        this.tests = res.tests.map(n => {
          let ic = "close";
          let c = "red";
          if (status["l-status"].find(r => r === n.id) !== undefined) {
            ic = "checkmark";
            c = "green";
          }
          return (
            <Table.Row key={n.id}>
              <Table.Cell>
                <Link to={`${document.location.pathname.slice(8)}/${n.id}`}>
                  {n.name}
                </Link>
              </Table.Cell>

              <Table.Cell width="1" textAlign="center">
                <Icon name={ic} color={c} />
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
    return (
      <div>
        <Header as="h1" color={"red"} textAlign="center">
          Задания
        </Header>
        <h4 class="ui horizontal divider">
          <i class="angle down red icon"></i>
        </h4>
        <Switch>
          <Route path={`${document.location.pathname.slice(8)}/:id`}>gg</Route>
          <Route path="/:id">
            <Table celled size="large">
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>
                    {" "}
                    <Icon name="file alternate outline" />
                    Лекции
                  </Table.HeaderCell>

                  <Table.HeaderCell>Статус</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>{this.lectures}</Table.Body>

              <Table.Footer>
                <Table.Row>
                  <Table.HeaderCell colSpan="3"></Table.HeaderCell>
                </Table.Row>
              </Table.Footer>
            </Table>
            <Table celled size="large">
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>
                    <Icon name="tasks" />
                    Тесты
                  </Table.HeaderCell>

                  <Table.HeaderCell>Статус</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>{this.tests}</Table.Body>

              <Table.Footer>
                <Table.Row>
                  <Table.HeaderCell colSpan="3"></Table.HeaderCell>
                </Table.Row>
              </Table.Footer>
            </Table>
          </Route>
        </Switch>
      </div>
    );
  }
}

const Tasks = withRouter(_Tasks);

export default Tasks;
