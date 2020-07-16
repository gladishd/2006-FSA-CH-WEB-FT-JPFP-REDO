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
    console.log(this.props)
  }
  render() {
    console.log(this.props)
    let { address, description, id, imageUrl, name, students } = this.props.currentCampus;
    return (
      <div>
        <div className='flex-container'>
          <div>Name: {name}</div>
          <img src={imageUrl} />
          <div> Address: {address}</div>
          <div>Description: {description} </div>
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
