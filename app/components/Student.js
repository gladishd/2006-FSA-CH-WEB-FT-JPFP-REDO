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
    return (
      <div>
        <div className='flex-container'>
          <div>
            {this.props.currentStudent.firstName}
          </div>
          <div>
            {this.props.currentStudent.lastName}
          </div>
          <div>
            {this.props.currentStudent.email}
          </div>
          <div>
            GPA: {this.props.currentStudent.gpa}
          </div>
          <div onClick={e => this.handleClick(e)} id={this.props.currentStudent.campusId}>
            School Name: {this.props.currentStudent.campus && this.props.currentStudent.campus.name}
            {!this.props.currentStudent.campus && "no school!"}
          </div>
          <img src={this.props.currentStudent.imageUrl} />
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
