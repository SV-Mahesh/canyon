import React, { Component } from 'react';
import Add from './Add';
import List from './List';

export default class Assignment extends Component {
  state = { load: false, submit: false, error: false, duedate: new Date() };

  render() {
    return (
      <div>
        <div className="card-body">
          <Add />
          <List />
        </div>
      </div>
    )
  }
}
