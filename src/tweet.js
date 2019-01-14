import React from "react";
import { Avatar } from "./avatar";
import { UserName } from "./username";
import { UserHandle } from "./userhandle";
import { Message } from "./message";
import { TimePosted } from "./timeposted";

export class Tweet extends React.Component {
  constructor(props) {
    super(props);
    const timeNow = new Date();
    const timeNowFormatted = timeNow.getHours() + ":" + timeNow.getMinutes();
    this.state = { message: this.props.message, time: timeNowFormatted };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const newMessage = e.target.value;
    const timePosted = new Date();
    const timeFormatted = timePosted.getHours() + ":" + timePosted.getMinutes();
    this.setState({
      message: newMessage === "" ? this.props.message : newMessage,
      time: timeFormatted
    });
  }
  render() {
    return (
      <div className="tweet-container">
        <Avatar avatarUrl={this.props.avatarUrl} />
        <div className="content">
          <div>
            <UserName name={this.props.name} />
            <UserHandle handle={this.props.handle} />
            <Message message={this.state.message} />
            <TimePosted message={this.state.message} time={this.state.time} />
          </div>
          <div>
            <input
              placeholder="Status generator!"
              type="text"
              onChange={this.handleChange}
            />
          </div>
        </div>
      </div>
    );
  }
}
