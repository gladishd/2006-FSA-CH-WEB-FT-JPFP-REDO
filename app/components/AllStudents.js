import React from "react";
import { connect } from "react-redux";
import { fetchStudents } from '../redux/students';
// import fetchStudents thunk from the students.js file, which then makes an API request.
import { removeStudentThunk } from '../redux/singleStudent';


// Notice that we're exporting the AllStudents component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllStudents extends React.Component {
  componentDidMount() {
    this.props.getStudents();
  }
  handleClick(e) {
    e.preventDefault();
    this.props.history.push((`/students/${e.target.id}`))
  }
  handleRemove(studentId) {
    this.props.removeStudent(studentId);
    this.props.getStudents();
  }
  render() {
    return (
      <div>
        {
          <div>
            {this.props.students[0] === undefined ?
              'No Students' : 'Students:'}
          </div>
        }
        {this.props.students
          .map((student) => {
            return (
              <div>
                <div id={student.id} key={student.id} onClick={e => this.handleClick(e)} >
                  Name: {student.firstName + ' ' + student.lastName}
                </div>
                <button type="button" onClick={() => this.handleRemove(student.id)}> X </button>
              </div>
            )
          })}
      </div>
    )
  }
}

const mapState = (state) => {
  return { students: state.students };
};

const mapDispatch = (dispatch) => {
  return {
    getStudents: () => { dispatch(fetchStudents()) },
    removeStudent: (id) => { dispatch(removeStudentThunk(id)) }
  };
};

export default connect(mapState, mapDispatch)(AllStudents);
