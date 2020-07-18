import React from 'react';

export default class CampusUpdateForm extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className=".addForm">
        <form onSubmit={this.props.handleSubmit}>
          <label htmlFor="name">Name: </label>
          <textarea name="name" value={this.props.name} onChange={this.props.mapInputToState} />
          <br></br>
          <label htmlFor="description">Description: </label>
          <textarea name="description" value={this.props.description} onChange={this.props.mapInputToState} />
          <br></br>
          <label htmlFor="address">Address: </label>
          <textarea name="address" value={this.props.address} onChange={this.props.mapInputToState} />
          <br></br>
          <button>Submit</button>
        </form>
      </div >
    );
  }
}
