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

const courses = () => {
  let arr = [];
  arr.push(
    <Card color="red">
      <Card.Content>
        <Card.Header>
          <Header as="h2" color="teal">
            Базы данных
          </Header>
        </Card.Header>
        <Card.Meta>базовый курс</Card.Meta>
        <Card.Description>
          Научись делать сложные запросы и вызывать дьявола
        </Card.Description>
      </Card.Content>
      <Card.Content extra textAlign="center">
        <Button color="teal" disabled>
          Добавить
        </Button>
      </Card.Content>
    </Card>
  );
  for (let i = 0; i < 69; i++) {
    arr.push(
      <Card color="red">
        <Card.Content>
          <Card.Header>
            <Header as="h2" color="teal">
              ООП
            </Header>
          </Card.Header>
          <Card.Meta>Уровень {i + 1}</Card.Meta>
          <Card.Description>
            - Скажи мне три главных слова... -Наследование... Инкапсуляция...
            Полиморфизм
          </Card.Description>
        </Card.Content>
        <Card.Content extra textAlign="center">
          <Button color="teal">Добавить</Button>
        </Card.Content>
      </Card>
    );
  }
  arr.push(
    <Card color="red">
      <Card.Content>
        <Card.Header>
          <Header as="h2" color="teal">
            ООП
          </Header>
        </Card.Header>
        <Card.Meta>пишем первую программу</Card.Meta>
        <Card.Description>Вот вы вошли в компизицую с гробами</Card.Description>
      </Card.Content>
      <Card.Content extra textAlign="center">
        <Button color="teal" disabled>
          Добавить
        </Button>
      </Card.Content>
    </Card>
  );

  return arr;
};

export default class AllCourses extends Component {
  render() {
    console.log(courses);
    return (
      <div>
        <Header as="h1" color={"red"} textAlign="center">
          Все курсы
        </Header>
        <h4 class="ui horizontal divider">
          <i class="angle down red icon"></i>
        </h4>

        <Card.Group textAlign="center">{courses()}</Card.Group>
      </div>
    );
  }
}
