import React from 'react';
import { connect } from "react-redux";
import { postNewCampus } from '../redux/singleCampus';

export class CampusForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      imageUrl: '',
      address: '',
      description: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) { // the default behavior isn't to refresh the page, but we should still prevent default.
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault(); // the default behavior here is to refresh the page
    this.props.postNewCampus(this.state);
  } // we should also call an addStudent method in the Redux store, except we should do it here

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="name">
            {this.state.name === '' ? <span style={{ 'color': 'red' }}>*required field </span> : <span></span>}
            Campus Name:
          </label>
          <textarea name="name" onChange={e => this.handleChange(e)} />
          <br></br>
          <label htmlFor="address">
            {this.state.address === '' ? <span style={{ 'color': 'red' }}>*required field </span> : <span></span>}
            Address:
          </label>
          <textarea name="address" onChange={e => this.handleChange(e)} />
          <br></br>
          <label htmlFor="description">Description: </label>
          <textarea name="description" onChange={e => this.handleChange(e)} />
          <br></br>
          <label htmlFor="imageUrl">Image URL: </label>
          <textarea name="imageUrl" onChange={e => this.handleChange(e)} />
          <br></br>
          <button type="submit">
            Submit
          </button>
        </form>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  campus: state.singleCampus,
});

const mapDispatchToProps = dispatch => ({
  postNewCampus: campusObj => {
    dispatch(postNewCampus(campusObj));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(CampusForm);
