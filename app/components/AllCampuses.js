import React from "react";
// we need this to connect react to redux
import { connect } from "react-redux";
import { fetchCampuses } from '../redux/campuses';

// Notice that we're exporting the AllCampuses component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.

// this is just a hard-coded version of
// this.props.campuses, which will be used
// to get this component to display before
// the routes are connected, not for the
// actual test specs, which simulate adding
// a dynamic campuses array to the props (properties).
let campuses = [
  {
    id: 1,
    name: "Mars Academy",
    imageUrl: "/images/mars.png"
  },
  {
    id: 2,
    name: "Jupiter Jumpstart",
    imageUrl: "/images/jupiter.jpeg"
  }
];
export class AllCampuses extends React.Component {
  componentDidMount() {
    this.props.getCampuses();
  }

  handleClick(e) {
    e.preventDefault();
    this.props.history.push((`/campuses/${e.target.id}`))
  }

  render() {
    // console.log(this.state) // line 33 will run once when it renders for the first time
    // componentdidmount gets called after that, and it re-renders
    return (
      <div>
        {
          <div>
            {this.props.campuses[0] === undefined ?
              'No Campuses' : 'Campuses:'}
          </div>
        }
        <div className='flex-container'>
          {this.props.campuses
            .map((campus) => {
              return (
                <div id={campus.id} key={campus.id} onClick={(e) => this.handleClick(e)}>
                  Name: {campus.name}
                  <br></br>
                  <img src={campus.imageUrl} />
                  <div></div>
                </div>
              )
            })}
        </div>
      </div>
    )
  }
}

const mapState = (state) => {
  // console.log(state)
  return { campuses: state.campuses };
};

const mapDispatch = (dispatch) => {
  return {
    getCampuses: () => { dispatch(fetchCampuses()) } // every time a state changes, it triggers a re-render
  };
};

export default connect(mapState, mapDispatch)(AllCampuses);
