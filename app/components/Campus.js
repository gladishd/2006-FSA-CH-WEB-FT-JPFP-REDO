import React from 'react';
import { connect } from 'react-redux';
import { fetchSingleCampus } from '../redux/singleCampus';

export class Campus extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let campusId = this.props.match.params.campusId;
    this.props.getSingleCampus(campusId);
  }
  render() {
    // console.log(this.props)
    let { address, description, id, imageUrl, name, students } = this.props.currentCampus;
    console.log(this.props.currentCampus.students);
    return (
      <div>
        <div className='flex-container'>
          <div>Name: {name}</div>
          <img src={imageUrl} />
          <div> Address: {address}</div>
          <div>Description: {description} </div>
          {/* don't render students unless they exist
           * (and they don't exist until the component mounts,
           * after the first render). */}
          <div>Students:
            {this.props.currentCampus.students && this.props.currentCampus.students
              .map(student => {
                return <div>

                  Name: {student.firstName} {student.lastName}
                  <br></br>
                Email: {student.email}
                  <br></br>
                GPA: {student.gpa}
                  <br></br>
                  <img src={student.imageUrl} />

                </div>

              })}
            {this.props.currentCampus.students && Object.keys(this.props.currentCampus.students).length === 0 && ' No Students!'}
          </div>

        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentCampus: state.singleCampus
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSingleCampus: (id) => { dispatch(fetchSingleCampus(id)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Campus);
