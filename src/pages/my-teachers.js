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

const extra = (
  <a>
    <Icon name="book" />2 Курса
  </a>
);

export default class MyTeachers extends Component {
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
          <Card
            image="https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
            header="Иван Иванов"
            meta="Уфа"
            description="Заслуженный деятетль искусств республики Дагестан, трижды судим, депутат городского совета города Мелеуз"
            extra={extra}
          />
        </Container>
      </div>
    );
  }
}
