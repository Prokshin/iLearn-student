import React, { Component } from "react";
import { Header, Button, Form, Divider } from "semantic-ui-react";
import ExComment from "./comment";

export default class Ex extends Component {
  state = {
    id: this.props.id,
    name: this.props.name,
    description: this.props.description
  };
  comments = [
    {
      author: "Василий Платонович",
      text: "Здесь был вася"
    },
    {
      author: "Аркадий Эдуардович",
      text: "ХУЙ"
    }
  ];
  // data = new DataService();
  constructor(props) {
    super(props);
  }

  update = () => {};

  render() {
    return (
      <div>
        <Header color="teal" as="h2">
          {this.state.name}
        </Header>
        <p>{this.state.description}</p>
        <Divider horizontal>Комментарии</Divider>
        <form className="ui form">
          <p>
            <textarea name="text" placeholder="оставить сообщение"></textarea>
          </p>
          <p>
            <button class="ui button" type="submit">
              отправить
            </button>
          </p>
        </form>
        <Divider></Divider>
        <ExComment data={this.comments} />
      </div>
    );
  }
}
