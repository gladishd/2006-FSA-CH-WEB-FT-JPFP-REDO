import React from 'react';
import { connect } from 'react-redux';
import { fetchSingleStudent } from '../redux/singleStudent';

export class Student extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // let campusId = this.props.match.params.campusId;
    this.props.getSingleStudent(2);
  }
  render() {
    // let { address, description, id, imageUrl, name, students } = this.props.currentCampus;
    console.log(this.props)
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
