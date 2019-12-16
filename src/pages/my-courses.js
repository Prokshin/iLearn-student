import React, { Component } from "react";
import {
  Header,
  Icon,
  Table,
  Label,
  Button,
  Progress,
  Container
} from "semantic-ui-react";

export default class MyCourses extends Component {
  render() {
    return (
      <div>
        <Header as="h1" color={"red"} textAlign="center">
          Мои курсы
        </Header>
        <h4 class="ui horizontal divider">
          <i class="angle down red icon"></i>
        </h4>
        <Table celled size="large">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Дисциплина</Table.HeaderCell>
              <Table.HeaderCell>Преподаватель</Table.HeaderCell>
              <Table.HeaderCell>прогресс</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>Базы данных</Table.Cell>
              <Table.Cell>Иванов Иван Иванович</Table.Cell>
              <Table.Cell>
                <Progress percent="60" progress indicating label="в процессе" />
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Методы вычисления</Table.Cell>
              <Table.Cell>Петров Пётр петрович</Table.Cell>
              <Table.Cell>
                <Progress percent="0" progress indicating label="не начато" />
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Инженерия знаний</Table.Cell>
              <Table.Cell>Алексеев Алексей Алексеевич</Table.Cell>
              <Table.Cell>
                <Progress percent="100" progress indicating label="завершено" />
              </Table.Cell>
            </Table.Row>
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan="3"></Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
        <Container textAlign="center">
          <Button color="teal">Добавить другие курсы</Button>
        </Container>
      </div>
    );
  }
}
