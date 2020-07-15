import React from "react";
import { connect } from "react-redux";
import { fetchStudents } from '../redux/students';
// import fetchStudents thunk from the students.js file, which then makes an API request.


// Notice that we're exporting the AllStudents component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllStudents extends React.Component {
  componentDidMount() {
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
              <div key={student.id}>
                Name: {student.firstName + ' ' + student.lastName}
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
    getStudents: () => { dispatch(fetchStudents()) }
  };
};

export default connect(mapState, mapDispatch)(AllStudents);
