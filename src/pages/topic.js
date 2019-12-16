import React from "react";

import { withRouter } from "react-router";
import { Header, Button, Label, Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { DataService } from "../services/data-service";

class Cc extends React.Component {
  tt;
  data = new DataService();
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
    this.Update();
  }

  Update() {
    this.data.getCourseById().then(res => {
      this.tt = (
        <div>
          <Header as="h1" color="teal">
            {res.topics[this.props.match.params.id].name}
          </Header>
          {res.topics[this.props.match.params.id].text}
          <Divider horizontal>Задания</Divider>

          {res.topics[this.props.match.params.id].tests.map(n => {
            return (
              <Link key={n} to={`/tests/${n}`}>
                <Button color="teal">
                  Тест № <Label>{n}</Label>
                </Button>
              </Link>
            );
          })}
        </div>
      );
    });
  }

  render() {
    const { match, location, history } = this.props;
    const card = this.tt;
    console.log(match);

    return (
      <div>
        You are now at {location.pathname}
        <Header size="large" color="teal" textAlign="center"></Header>
        {this.tt}
      </div>
    );
  }
}

export const TopicPage = withRouter(Cc);
