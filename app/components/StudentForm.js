import React from 'react';
import { connect } from "react-redux";
import { postNewStudent } from '../redux/singleStudent';

export class StudentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: ''
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

  render() {
    return (
      <div className="mb-3">
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="name">First Name: </label>
          <input name="firstName" onChange={e => this.handleChange(e)} />
          <br></br>
          <label htmlFor="address">Last Name: </label>
          <input name="lastName" onChange={e => this.handleChange(e)} />
          <br></br>
          <label htmlFor="email">Email: </label>
          <input name="email" onChange={e => this.handleChange(e)} />
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
