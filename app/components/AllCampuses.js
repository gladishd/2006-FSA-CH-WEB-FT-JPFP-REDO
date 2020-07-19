import React from "react";
import { connect } from "react-redux"; // we need this to connect react to redux
import { fetchCampuses } from '../redux/campuses'; // accessing Redux store
import { removeCampusThunk } from '../redux/singleCampus';

// Notice that we're exporting the AllCampuses component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.

export class AllCampuses extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  componentDidMount() {
    this.props.getCampuses();
  }

  handleClick(e) {
    e.preventDefault();
    this.props.history.push(`/campuses/${e.target.id}`)
  }

  handleRemove(campusId) {
    this.props.removeCampus(campusId);
    this.props.getCampuses(); // need to call this again!
  }

  render() {
    /* line 34 will run once when it renders for the first time
     * componentdidmount gets called after that, and it re-renders */
    return (
      <div>
        {
          <div className='titleLeftAlign'>
            {this.props.campuses[0] === undefined ?
              'No Campuses' : 'Campuses:'}
          </div>
        }
        <div className='flex-container'>
          {this.props.campuses
            .map((campus) => {
              return (
                <div id={campus.id} key={campus.id} onClick={(e) => this.handleClick(e)} className='titleLeftAlign'>
                  <br></br>
                  {campus.name}
                  <br></br>
                  <br></br>
                  <img id={campus.id} src={campus.imageUrl} className='image' />
                  <br></br>
                  <br></br>
                  <button type="button" onClick={() => this.handleRemove(campus.id)}> X </button>
                </div>
              )
            })
          }
        </div>
      </div >
    )
  }
}

const mapState = (state) => {
  return { campuses: state.campuses };
};

const mapDispatch = (dispatch) => {
  return {
    getCampuses: () => { dispatch(fetchCampuses()) }, // every time a state changes, it triggers a re-render
    removeCampus: (id) => { dispatch(removeCampusThunk(id)) }
  };
};

export default connect(mapState, mapDispatch)(AllCampuses);
