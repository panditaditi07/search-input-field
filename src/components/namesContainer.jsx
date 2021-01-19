import React, { Component } from "react";

class NamesContainer extends Component {
  render() {
    return (
      <div>
        {this.props.names.map((val) => {
          return <p key={val.id}>{val.name}</p>;
        })}
      </div>
    );
  }
}
export default NamesContainer;
