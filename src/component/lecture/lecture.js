import React, { Component } from "react";
import { DataService } from "../../services/data-service";
import { withRouter } from "react-router-dom";
import { Header, Divider, Segment, Button } from "semantic-ui-react";
import Ex from "../ex/ex";

class _Lecture extends Component {
  data = new DataService();
  state = {
    id: null,
    name: null,
    content: null,
    onLoad: false,
    theme_id: this.props.match.params.id,
    ex_id: null,
    ex_name: null,
    ex_desciption: null
  };
  content = "";
  constructor(props) {
    super(props);
    this.update();
    this.updateComments();
  }
  update = () => {
    this.data.getLecture(1, this.props.match.url).then(res => {
      console.log(res);
      this.setState({
        id: res.lecture.id,
        name: res.lecture.name,
        content: res.lecture.content,
        onLoad: true,
        ex_id: res?.exercises[0]?.id,
        ex_name: res?.exercises[0]?.name,
        ex_desciption: res?.exercises[0]?.description
      });
    });
  };
  updateComments = () => {
    this.data.getComment().then(res => {
      console.log(res);
    });
  };
  createMarkup() {
    return { __html: this.state.content };
  }
  render() {
    console.log(this.props.match);
    if (this.state.onLoad) {
      this.content = (
        <div>
          <Header>{this.state.name}</Header>
          <Divider hidden></Divider>
          <div dangerouslySetInnerHTML={this.createMarkup()} />
          <Segment>
            <Header>{this.state.ex_name}</Header>
            <p> {this.state.ex_desciption}</p>
            <Ex
              name="Написать первую программу"
              id="1"
              description="В комментарии отправить ссылку на скачивание исходного код"
            />
          </Segment>
        </div>
      );
    }
    return <div>{this.content}</div>;
  }
}

const Lecture = withRouter(_Lecture);

export default Lecture;
