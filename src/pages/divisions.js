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
import { DataService } from "../services/data-service";

import Theme from "../component/theme/theme";

class Division extends Component {
  data = new DataService();
  state = {
    data: [],
    courses: "",
    coure_id: this.props.match.params.id
  };
  courses = [];
  constructor(props) {
    super(props);
    this.updateInfo();
  }

  updateInfo() {
    this.data
      .getThemes(1, this.props.match.params.id)
      .then(res => {
        this.setState({
          status: "load"
        });
        const status = res.statuses;
        this.courses = res.themes.map(n => {
          let pd = "ban";
          let cl = "red";
          switch (status[n.id]) {
            case false:
              pd = "close";

              break;
            case true:
              pd = "checkmark";
              cl = "green";
              break;
          }

          return (
            <Table.Row key={n.id}>
              <Table.Cell>
                <Link to={`${document.location.pathname.slice(8)}/${n.name}`}>
                  {n.name}
                </Link>
              </Table.Cell>

              <Table.Cell width="1" textAlign="center">
                <Icon name={pd} color={cl} />
              </Table.Cell>
            </Table.Row>
          );
        });
      })
      .then(() => {
        this.setState({
          courses: this.courses
        });
      });
  }
  render() {
    console.log(this.props.match);
    return (
      <div>
        <Header as="h1" color={"red"} textAlign="center">
          Темы
        </Header>
        <h4 class="ui horizontal divider">
          <i class="angle down red icon"></i>
        </h4>
        <Switch>
          <Route path={`${this.props.match.url}/:id`}>
            <Theme course_id={this.state.coure_id} />
          </Route>
          <Route path={this.props.match.url}>
            <Table celled size="large" st={this.state.status}>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Тема</Table.HeaderCell>

                  <Table.HeaderCell>Статус</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body st={this.state.status}>{this.courses}</Table.Body>

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

const Divisions = withRouter(Division);

export default Divisions;
