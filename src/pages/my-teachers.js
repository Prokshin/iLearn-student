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

const extra = (
  <a>
    <Icon name="book" />2 Курса
  </a>
);

export default class MyTeachers extends Component {
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
              image={n.image}
              header={n.name}
              meta={n.location}
              description={n.description}
              extra={
                <a>
                  <Icon name="book" /> {n.coursesCount} {"курса "}
                </a>
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
        <Container textAlign="center">
          <Card.Group textAlign="center">{this.teachers}</Card.Group>
        </Container>
      </div>
    );
  }
}
