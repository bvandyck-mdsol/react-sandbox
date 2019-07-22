import React, { Component } from "react";
import MediLoader from './MediLoader';

class Users extends Component {
  render() {
    return (
      <div style={{marginLeft:40}}>
        <h1> Users </h1>
        <MediLoader />
      </div>
    )
  }
}

export default Users;
