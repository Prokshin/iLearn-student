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
import Lecture from "../lecture/lecture";

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
      .getTasks(1, this.props.match.url)
      .then(res => {
        const status = res.statuses;

        this.lectures = res.lectures.map(n => {
          let ic = "close";
          let c = "red";

          return (
            <Table.Row key={n.id}>
              <Table.Cell>
                <Link
                  to={`${document.location.pathname.slice(8)}/lecture/${n.id}`}
                >
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
    console.log(this.props.match);
    return (
      <div>
        <Header as="h1" color={"red"} textAlign="center">
          Задания
        </Header>
        <h4 class="ui horizontal divider">
          <i class="angle down red icon"></i>
        </h4>
        <Switch>
          <Route path={`${this.props.match.url}/lecture/:id`}>
            <Lecture />
          </Route>
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
          </Route>
        </Switch>
      </div>
    );
  }
}

const Tasks = withRouter(_Tasks);

export default Tasks;
