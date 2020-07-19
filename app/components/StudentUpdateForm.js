import React from 'react';

export default class StudentUpdateForm extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className=".addForm">
        <form onSubmit={this.props.handleSubmit}>
          <label htmlFor="firstName">First Name: </label>
          <textarea name="firstName" value={this.props.firstName} onChange={this.props.mapInputToState} />
          <br></br>
          <label htmlFor="lastName">Last Name: </label>
          <textarea name="lastName" value={this.props.lastName} onChange={this.props.mapInputToState} />
          <br></br>
          <label htmlFor="email">Email: </label>
          <textarea name="email" value={this.props.email} onChange={this.props.mapInputToState} />
          <br></br>
          <label htmlFor="imageUrl">Image URL: </label>
          <textarea name="imageUrl" value={this.props.imageUrl} onChange={this.props.mapInputToState} />
          <br></br>
          <label htmlFor="gpa">GPA: </label>
          <textarea name="gpa" value={this.props.gpa} onChange={this.props.mapInputToState} />
          <br></br>
          <button>Submit</button>
        </form>
      </div >
    );
  }
}
