import React from 'react';
import { connect } from "react-redux";
import { postNewStudent } from '../redux/singleStudent';

export class StudentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      imageUrl: '',
      gpa: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.postNewStudent(this.state);
  }

  validEmail(email) {
    return (email.indexOf('@') !== -1 &&
      email.indexOf('.') !== -1 &&
      email.lastIndexOf('.') > email.indexOf('@'));
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="firstName">
            First Name:
            {this.state.firstName === '' ? <span style={{ 'color': 'red' }}>*required field </span> : <span></span>}
          </label>
          {/* the htmlFor id matches */}
          <textarea name="firstName" onChange={e => this.handleChange(e)} />
          <br></br>
          <label htmlFor="lastName">
            Last Name:
            {this.state.lastName === '' ? <span style={{ 'color': 'red' }}>*required field </span> : <span></span>}
          </label>
          <textarea name="lastName" onChange={e => this.handleChange(e)} />
          <br></br>
          <label htmlFor="email">
            Email:
            {!this.validEmail(this.state.email) ? <span style={{ 'color': 'red' }}>*invalid email</span> : <span></span>}
          </label>
          <textarea name="email" onChange={e => this.handleChange(e)} />
          <br></br>
          <label htmlFor="imageUrl" >Image URL: </label>
          <textarea name="imageUrl" onChange={e => this.handleChange(e)} />
          <br></br>
          <label htmlFor="gpa">GPA: </label>
          <textarea name="gpa" onChange={e => this.handleChange(e)} />
          <br></br>
          <button type="submit">Submit!</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  student: state.singleStudent,
});

const mapDispatchToProps = dispatch => ({
  postNewStudent: studentObj => {
    dispatch(postNewStudent(studentObj));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(StudentForm);
