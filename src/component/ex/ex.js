import React, { Component } from "react";
import { Header, Button, Form, Divider } from "semantic-ui-react";
import ExComment from "./comment";
import { withRouter } from "react-router-dom";

class Ex extends Component {
  state = {
    id: this.props.id,
    name: this.props.name,
    description: this.props.description,
    id_cook: 1
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
    console.log(this.props.match.url);
    return (
      <div>
        <Header color="teal" as="h2">
          {this.state.name}
        </Header>
        <p>{this.state.description}</p>
        <Divider horizontal>Комментарии</Divider>
        <form
          className="ui form"
          encType="multipart/form-data"
          method="POST"
          action={`http://localhost:8080/student/${this.state.id_cook}${this.props.match.url}/exercise/${this.state.id}/comment`}
        >
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

const ExWithRouter = withRouter(Ex);

export default ExWithRouter;
