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
        id: res.id,
        name: res.name,
        content: res.content,
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
    console.log(this.state.ex_id);
    if (this.state.onLoad) {
      this.content = (
        <div>
          <Header>{this.state.name}</Header>
          <Divider hidden></Divider>
          <div dangerouslySetInnerHTML={this.createMarkup()} />
          <Segment>
            <Ex
              name={this.state.ex_name}
              id={this.state.ex_id}
              description={this.state.ex_desciption}
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
