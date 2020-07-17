import React from 'react';
import { connect } from 'react-redux';
import { updateStudentThunk } from '../redux/singleStudent';
import { fetchSingleCampus, updateCampusThunk } from '../redux/singleCampus';
import CampusUpdateForm from './CampusUpdateForm';

export class Campus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      campusId: this.props.match.params.campusId,
      name: "",
      description: "",
      address: "",
      showForm: false,
    };
    this.showUpdateForm = this.showUpdateForm.bind(this);
    this.mapInputToState = this.mapInputToState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.unregisterStudent = this.unregisterStudent.bind(this);
  }

  componentDidMount() {
    this.props.getSingleCampus(this.state.campusId);
  }

  getStudent(e) {
    e.preventDefault();
    this.props.history.push((`/students/${e.target.id}`))
  }

  showUpdateForm(e) {
    e.preventDefault();
    const { currentCampus } = this.props;
    this.setState({
      id: currentCampus.id,
      name: currentCampus.name,
      address: currentCampus.address,
      description: currentCampus.description,
      showForm: !this.state.showForm,
    });
    this.props.getSingleCampus(this.state.campusId);
  }

  mapInputToState(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name, description, address } = this.state;
    this.props.updateCampus({
      id: this.props.currentCampus.id,
      name: name,
      description: description,
      address: address
    });
    this.setState({ showForm: false });
    let campusId = this.props.match.params.campusId;
    this.props.getSingleCampus(campusId);
  }

  async unregisterStudent(e, studentId) {
    e.preventDefault();
    await this.props.updateStudent(studentId, { campusId: null });
    // order is important!  we don't want to
    // re-retrieve the students before they've been unregistered, or we'll get blank text for our values.
    // not only that, but we're awaiting a RESPONSE.
    setTimeout(() => this.props.getSingleCampus(this.props.match.params.campusId), 100)
    // this should just trigger the SET (get) _SPECIFIC_CAMPUS action,
    // in order that the page refreshes properly so that we don't have to reload the page.
  }

  render() {
    const { address, description, imageUrl, name, students } = this.props.currentCampus;
    return (
      <div>
        <div className='flex-container'>
          <div>Name: {name} </div>
          <img src={imageUrl} />
          <div>Address: {address} </div>
          <div>Description: {description} </div>
          {/* don't render students unless they exist
           * (and they don't exist until the component mounts,
           * after the first render). */}
          <div>Students:
            {
              students &&
              students
                .map(student => {
                  return <div>
                    <div id={student.id} key={student.id} onClick={e => this.getStudent(e)}>
                      Name: {student.firstName} {student.lastName}
                      <br></br>
                      Email: {student.email}
                      <br></br>
                      GPA: {student.gpa}
                      <br></br>
                      <img src={student.imageUrl} />
                    </div>
                    <div>
                      <button onClick={(e) => { this.unregisterStudent(e, student.id); }}>
                        Unregister
                      </button>
                    </div>
                  </div>
                })
            }
            {
              students &&
              Object.keys(students).length === 0 &&
              ' No Students!'
            }
          </div>
          <button type="button" onClick={this.showUpdateForm}>
            Update Campus
            </button>
          {
            this.state.showForm ?
              <CampusUpdateForm
                name={this.state.name}
                address={this.state.address}
                description={this.state.description}
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
    currentCampus: state.singleCampus
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSingleCampus: (id) => { dispatch(fetchSingleCampus(id)) },
    updateCampus: (id, updates) => { dispatch(updateCampusThunk(id, updates)) },
    updateStudent: (id, updates) => { dispatch(updateStudentThunk(id, updates)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Campus);
