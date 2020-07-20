import React from 'react';
import { connect } from 'react-redux';
import { updateStudentThunk } from '../redux/singleStudent';
import { fetchSingleCampus, updateCampusThunk } from '../redux/singleCampus';
import CampusUpdateForm from './CampusUpdateForm';

export class Campus extends React.Component {
  constructor(props) {
    super(props); // (props) (best practice) or ()?
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
    this.props.getSingleCampus(this.state.campusId);
  }

  async unregisterStudent(e, studentId) {
    e.preventDefault();
    await this.props.updateStudent(studentId, { campusId: null });
    // order is important!  we don't want to
    // re-retrieve the students before they've been unregistered, or we'll get blank text for our values.
    // not only that, but we're awaiting a RESPONSE.
    setTimeout(() => this.props.getSingleCampus(this.state.campusId), 100)
    // this should just trigger the SET (get) _SPECIFIC_CAMPUS action,
    // in order that the page refreshes properly so that we don't have to reload the page.
  }

  render() {
    /* If we try to access an invalid campus id, for instance http://localhost:1337/campuses/234,
     * then that campus id will not be retrieved and so currentCampus is null */
    if (!this.props.currentCampus) {
      return (
        <h1>
          Campus not found!
        </h1>
      )
    }

    const { address, description, imageUrl, name, students } = this.props.currentCampus;
    return (
      <div>
        <div className='singleCampus'>
          <div style={{ 'fontWeight': 'bold' }}> {name} </div>
          <br></br>
          <img src={imageUrl} />
          <br></br>
          <div>Address: {address} </div>
          <br></br>
          <div>Description: {description} </div>
          <br></br>
          {/* don't render students unless they exist
           * (and they don't exist until the component mounts,
           * after the first render). */}
          <div style={{ 'fontWeight': 'bold' }}>Students: </div>
          <br></br>
          <div>
            {
              students &&
              students
                .map(student => {
                  return <div key={student.id}>
                    <div>
                      <div id={student.id} onClick={e => this.getStudent(e)}>
                        Name: <i> {student.firstName} {student.lastName} </i>
                        <br></br>
                      Email: <i>{student.email} </i>
                        <br></br>
                      GPA: {student.gpa}
                        <br></br>
                        <img src={student.imageUrl} id={student.id} />
                      </div>
                    </div>
                    <button onClick={(e) => { this.unregisterStudent(e, student.id); }}>
                      Unregister
                      </button>
                    <br></br>
                    <br></br>
                    <br></br>
                  </div>
                })
            }
            {
              students &&
              Object.keys(students).length === 0 &&
              ' No Students!'
            }
          </div>
          <br></br>
          <button onClick={this.showUpdateForm}>
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
        <br></br>
        <br></br>
        <br></br>
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
