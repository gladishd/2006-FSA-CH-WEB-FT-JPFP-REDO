import React from 'react';
import { connect } from 'react-redux';
import { fetchSingleStudent } from '../redux/singleStudent';

export class Student extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let studentId = this.props.match.params.studentId;
    this.props.getSingleStudent(studentId);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.history.push((`/campuses/${e.target.id}`))
  }

  render() {
    const { firstName, lastName, email, gpa, campusId, campus, imageUrl } = this.props.currentStudent;
    return (
      <div>
        <div className='flex-container'>
          <div> {firstName} </div>
          <div> {lastName} </div>
          <div> {email} </div>
          <div> GPA: {gpa} </div>
          <div onClick={e => this.handleClick(e)} id={campusId}>
            Campus: {campus && campus.name}
            {!campus && "The student is not associated with any campus!"}
          </div>
          <img src={imageUrl} />
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
    getSingleStudent: (id) => { dispatch(fetchSingleStudent(id)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Student);
