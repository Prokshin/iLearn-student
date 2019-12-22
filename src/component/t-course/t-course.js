import React, { Component } from "react";
import { DataService } from "../../services/data-service";
import { Table, Progress, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class Tcourse extends Component {
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
      .getCourseByTeacher()
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
              <Table.Cell>{n.name}</Table.Cell>
              <Table.Cell width="4">
                <Button fluid color={"green"}>
                  Добавить
                </Button>
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
    return (
      <div>
        <Table celled size="large">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Курс</Table.HeaderCell>

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
      </div>
    );
  }
}
