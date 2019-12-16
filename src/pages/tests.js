import React from "react";
import PropTypes from "prop-types";
import { withRouter, Route, Switch } from "react-router";
import {
  Header,
  Card,
  Image,
  Icon,
  Container,
  Button,
  Label,
  Divider
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { DataService } from "../services/data-service";

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

class Tt extends React.Component {
  // tt;
  // data = new DataService();
  // constructor(props) {
  //   super(props);
  //   this.setState({
  //     data: null
  //   });
  //   this.Update();
  // }

  // Update() {
  //   this.data.getCourseById().then(res => {
  //     this.tt = (
  //       <div>
  //         <Header as="h1" color="teal">
  //           {res.topics[this.props.match.params.id].name}
  //         </Header>
  //         {res.topics[this.props.match.params.id].text}
  //         <Divider horizontal>Задания</Divider>

  //         {res.topics[this.props.match.params.id].tests.map(n => {
  //           return (
  //             <Link to={`/tests/${n}`}>
  //               <Button color="teal">
  //                 Тест № <Label>{n}</Label>
  //               </Button>
  //             </Link>
  //           );
  //         })}
  //       </div>
  //     );
  //   });
  // }

  render() {
    const { match, location, history } = this.props;
    console.log(match);

    return (
      <div>
        <Button onClick={() => window.history.back()} color="red">
          <Header color="black" inverted>
            Закрыть тест
          </Header>
        </Button>
        You are now at {location.pathname}
        <Header size="large" color="teal" icon="close" textAlign="center">
          as
        </Header>
      </div>
    );
  }
}

export const TestsPage = withRouter(Tt);
