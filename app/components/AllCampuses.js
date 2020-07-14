import React from "react";
import { connect } from "react-redux";

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
  render() {
    campuses = this.props.campuses;
    // console.log(this.props.campuses)
    return (
      <div>
        {
          <div>
            {campuses[0] === undefined ?
              'No Campuses' : 'Campuses:'}
          </div>
        }
        {campuses
          .map((campus) => {
            return (
              <div key={campus.id}>
                Name: {campus.name}

                image: <img src={campus.imageUrl} />
              </div>
            )
          })}
      </div>
    )
  }
}

const mapState = () => {
  return {};
};

const mapDispatch = () => {
  return {};
};

export default connect(mapState, mapDispatch)(AllCampuses);
