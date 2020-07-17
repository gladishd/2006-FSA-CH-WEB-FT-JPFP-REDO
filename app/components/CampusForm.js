import React from 'react';
import { connect } from "react-redux";
import { postNewCampus } from '../redux/singleCampus';

export class CampusForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
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
          <label htmlFor="name">Name: </label>
          <input name="name" type="text" onChange={e => this.handleChange(e)} />
          <br></br>
          <label htmlFor="address">Address: </label>
          <input name="address" type="text" onChange={e => this.handleChange(e)} />
          <br></br>
          <button type="submit">
            Submit!
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
