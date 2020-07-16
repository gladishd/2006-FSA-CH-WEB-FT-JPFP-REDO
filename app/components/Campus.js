import React from 'react';
import { connect } from 'react-redux';

export class Campus extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props)
    let campusId = this.props.match.params.campusId;
    console.log(campusId)
    return (
      <div>
        the single campus component
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    name: state.name,
    image: state.imageUrl,
    address: address,
    description: description
  }
};

const mapDispatch = (dispatch) => {
  return {

  }
}

export default connect(null, null)(Campus);
