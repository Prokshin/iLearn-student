import React, { Component } from "react";
import { DataService } from "../../services/data-service";
import { withRouter } from "react-router-dom";
import { Header, Divider, Segment, Button } from "semantic-ui-react";

class _Lecture extends Component {
  data = new DataService();
  state = {
    id: null,
    name: null,
    content: null,
    onLoad: false,
    theme_id: this.props.match.params.id
  };
  content = "";
  constructor(props) {
    super(props);
    this.update();
  }
  update = () => {
    this.data.getLecture().then(res => {
      this.setState({
        id: res.id,
        name: res.name,
        content: res.content,
        onLoad: true
      });
    });
  };
  createMarkup() {
    return { __html: this.state.content.text };
  }
  render() {
    if (this.state.onLoad) {
      this.content = (
        <div>
          <Header>{this.state.name}</Header>
          <Divider hidden></Divider>
          <div dangerouslySetInnerHTML={this.createMarkup()} />
          <Segment>
            <Header>Практика</Header>
            <p>1. Какое - нибудь практическое задание </p>
            <p>2 .Ещё одно какое - нибудь практическое задание</p>
            <form
              className="ui form"
              action=""
              enctype="multipart/form-data"
              method="post"
            >
              <div className="field">
                <p>Загрузите файл с ответами и преподаватель их проверит </p>
                <div className="ui left icon input">
                  <input type="file" name="file" />
                  <i class="file icon"></i>
                </div>
              </div>
              <div>
                <div>
                  <button className="ui animated button basic teal fluid">
                    отправить файл
                  </button>
                </div>
              </div>
            </form>
          </Segment>
        </div>
      );
    }
    return <div>{this.content}</div>;
  }
}

const Lecture = withRouter(_Lecture);

export default Lecture;
