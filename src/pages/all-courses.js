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

export default class AllCourses extends Component {
  data = new DataService();
  el = "";
  constructor(props) {
    super(props);
    this.state = {
      d: null
    };
    this.update();
  }
  AddCourse = id => {
    alert("Пошёл запрос на добавление курса под номером " + id);
  };
  update = () => {
    this.data
      .getAllCourse()
      .then(res => {
        this.el = res.courses.map(n => {
          return (
            <Card color="red" key={n.id}>
              <Card.Content>
                <Card.Header>
                  <Header as="h2" color="teal">
                    {n.name}
                  </Header>
                </Card.Header>
                <Card.Meta>{n.level}</Card.Meta>
                <Card.Description>{n.description}</Card.Description>
              </Card.Content>
              <Card.Content extra textAlign="center">
                <Button onClick={() => this.AddCourse(n.id)} color="teal">
                  Добавить
                </Button>
              </Card.Content>
            </Card>
          );
        });
      })
      .then(res => {
        this.setState({
          d: this.el
        });
      });
  };
  render() {
    return (
      <div>
        <Header as="h1" color={"red"} textAlign="center">
          Все курсы
        </Header>
        <h4 class="ui horizontal divider">
          <i class="angle down red icon"></i>
        </h4>

        <Card.Group textAlign="center">
          {" "}
          {this.el}
          <Card color="red">
            <Card.Content>
              <Card.Header>
                <Header as="h2" color="teal">
                  ООП
                </Header>
              </Card.Header>
              <Card.Meta>пишем первую программу</Card.Meta>
              <Card.Description>
                Вот вы вошли в компизицую с гробами
              </Card.Description>
            </Card.Content>
            <Card.Content extra textAlign="center">
              <Button color="teal">Добавить</Button>
            </Card.Content>
          </Card>
        </Card.Group>
      </div>
    );
  }
}
