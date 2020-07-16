import React from 'react';

export class StudentForm extends React.Component {
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
    this.setState({ name: event.target.value })
  }

  handleSubmit(e) {
    e.preventDefault(); // the default behavior here is to refresh the page
    console.log(this.state.name)
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="name">Name: </label>
          <input name="name" type="text" onChange={e => this.handleChange(e)} />
          <button type="submit" className="submitButton">
            Submit!
          </button>
        </form>

      </div>
    )
  }
}


export default StudentForm;
