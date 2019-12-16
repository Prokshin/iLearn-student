import React from "react";
import PropTypes from "prop-types";
import { withRouter, Route, Switch } from "react-router";
import { Header, Card, Image, Icon, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { DataService } from "../services/data-service";
import { TopicPage } from "./topic";

const topics = [
  {
    id: 0,
    name: "Базы данных",
    teacher: "Иванов Иван Иванович",
    progress: 60,
    topics: [
      {
        id: 0,
        name: "Иерархическая модель",
        text:
          "Иерархические базы данных могут быть представлены как дерево, состоящее из объектов различных уровней. Верхний уровень занимает один объект, второй — объекты второго уровня и т. д. Между объектами существуют связи, каждый объект может включать в себя несколько объектов более низкого уровня. Такие объекты находятся в отношении предка (объект более близкий к корню) к потомку (объект более низкого уровня), при этом возможна ситуация, когда объект-предок не имеет потомков или имеет их несколько, тогда как у объекта-потомка обязательно только один предок. Объекты, имеющие общего предка, называются близнецами.",
        progress: 40,
        tests: ["id1", "id2"]
      }
    ]
  }
];

class C extends React.Component {
  tt;
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
      .getCourseById(this.props.match.params.id)
      .then(res => {
        this.tt = res.topics.map(n => {
          return (
            <Card key={n.id} color="red">
              <Card.Content>
                <Card.Header>{n.name}</Card.Header>
                <Card.Meta>
                  <span className="date">тема </span>
                </Card.Meta>
              </Card.Content>
              <Card.Content extra>
                <Link to={`${this.props.location.pathname}/${n.id}`}>
                  <Icon name="book" />1 статья и 2 теста
                </Link>
              </Card.Content>
            </Card>
          );
        });
        return res;
      })
      .then(res => {
        this.setState({
          data: res
        });
      });
  }
  render() {
    const { match, location, history } = this.props;
    const card = this.tt;
    return (
      <div>
        <Switch>
          <Route path={`${match.url}/:id`}>
            <TopicPage />
          </Route>
          <Route path={`${match.url}/`}>
            <Container fluid textAlign="center">
              <Header size="large" color="teal" textAlign="center"></Header>
              <Card.Group textAlign="center">{card}</Card.Group>
            </Container>
          </Route>
        </Switch>
      </div>
    );
  }
}

export const Course = withRouter(C);
