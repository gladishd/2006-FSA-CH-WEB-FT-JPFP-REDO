import React from 'react';
import { connect } from "react-redux";
import { postNewStudent } from '../redux/singleStudent';

export class StudentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
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
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="name">First Name: </label>
          <input name="firstName" type="text" onChange={e => this.handleChange(e)} />
          <br></br>
          <label htmlFor="address">Last Name: </label>
          <input name="lastName" type="text" onChange={e => this.handleChange(e)} />
          <br></br>
          <label htmlFor="email">Last Name: </label>
          <input name="email" type="text" onChange={e => this.handleChange(e)} />
          <br></br>
          <button type="submit">
            Submit!
          </button>
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
