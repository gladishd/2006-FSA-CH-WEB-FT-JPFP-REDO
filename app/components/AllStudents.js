import React from "react";
import { connect } from "react-redux";
import { fetchStudents } from '../redux/students'; // this makes an API request
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
        <div className='titleLeftAlign'>
          {
            this.props.students[0] === undefined ?
              'No Students' : 'Students:'
          }
        </div>
        <div className='flex-container'>
          {this.props.students
            .map((student) => {
              return (
                <div key={student.id}>
                  <div id={student.id} onClick={e => this.handleClick(e)} className='title'>
                    <br></br>
                    Name: {student.firstName + ' ' + student.lastName}
                    <br></br>
                    <br></br> {/* need to have id on the image so that we can click on it. */}
                    <img id={student.id} src={student.imageUrl} />
                    <br></br>
                    <br></br>
                  </div>
                  <button type="button" onClick={() => this.handleRemove(student.id)}> X </button>
                </div>
              )
            })}
        </div>
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
