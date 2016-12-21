import React, { Component } from "react";
import { Heading } from "spectacle";

export default class Interactive extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      count: this.state.count + 1
    });
  }
  render() {
    const styles = {
      padding: 20,
      background: "black",
      minWidth: 300,
      marginTop: 20,
      textTransform: "uppercase",
      border: "none",
      color: "white",
      outline: "none",
      fontWeight: "bold",
      fontSize: "2em"
    };
    return (
      <div>
      {this.state.count < 10 ?
        <div>
          <Heading size={1} caps fit textColor="tertiary">
            Thats real cool and all
          </Heading>
          <Heading size={5} textColor="black">
            But what about clicking stuff {this.state.count} times
          </Heading>
          <button style={styles} type="button" onClick={this.handleClick}>Click Me</button>
        </div> :
        <div>
          <Heading size={1} caps textColor="tertiary">Easy there pal</Heading>
          <Heading size={1} caps textColor="black">
            We got it the idea!
          </Heading>
        </div>
        }
      </div>
    );
  }
}
