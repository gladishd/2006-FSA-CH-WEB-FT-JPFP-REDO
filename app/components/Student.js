import React from 'react';
import { connect } from 'react-redux';
import { fetchSingleStudent } from '../redux/singleStudent';
import { updateStudentThunk } from '../redux/singleStudent';
import StudentUpdateForm from './StudentUpdateForm';

export class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studentId: this.props.match.params.studentId,
      firstName: "",
      lastName: "",
      email: "",
      imageUrl: "",
      gpa: null,
      showForm: false,
    };
    this.showUpdateForm = this.showUpdateForm.bind(this);
    this.mapInputToState = this.mapInputToState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    let studentId = this.props.match.params.studentId;
    this.props.getSingleStudent(studentId);
  }

  showUpdateForm(e) {
    e.preventDefault();
    const { currentStudent } = this.props;
    this.setState({
      firstName: currentStudent.firstName,
      lastName: currentStudent.lastName,
      email: currentStudent.email,
      imageUrl: currentStudent.imageUrl,
      gpa: currentStudent.gpa,
      showForm: !this.state.showForm,
    });
    this.props.getSingleStudent(this.state.campusId);
  }

  mapInputToState(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { firstName, lastName, email, imageUrl, gpa } = this.state;
    this.props.updateStudent(Number(this.state.studentId), {
      firstName: firstName,
      lastName: lastName,
      email: email,
      imageUrl: imageUrl,
      gpa: gpa
    });
    this.setState({ showForm: false });
    let studentId = this.props.match.params.studentId;
    this.props.getSingleStudent(studentId);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.history.push((`/campuses/${e.target.id}`))
  }

  render() {
    if (!this.props.currentStudent) {
      return (
        <h1>
          Student not found!
        </h1>
      )
    }
    const { firstName, lastName, email, gpa, campusId, campus, imageUrl } = this.props.currentStudent;
    return (
      <div>
        <div>
          <div> {firstName} {lastName} </div>
          <br></br>
          <div style={{ 'fontStyle': 'italic' }}> {email} </div>
          <br></br>
          <div> GPA: {gpa} </div>
          <br></br>
          <div onClick={e => this.handleClick(e)} id={campusId}>
            Campus: {campus && campus.name}
            {!campus && "The student is not associated with any campus!"}
          </div>
          <img src={imageUrl} />
          <button onClick={this.showUpdateForm}>
            Update Student
            </button>
          {
            this.state.showForm ?
              <StudentUpdateForm
                firstName={this.state.firstName}
                lastName={this.state.lastName}
                email={this.state.email}
                imageUrl={this.state.imageUrl}
                gpa={this.state.gpa}
                mapInputToState={this.mapInputToState}
                handleSubmit={this.handleSubmit}
              /> : ''
          }
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentStudent: state.singleStudent
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSingleStudent: (id) => { dispatch(fetchSingleStudent(id)) },
    updateStudent: (id, updates) => { dispatch(updateStudentThunk(id, updates)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Student);
