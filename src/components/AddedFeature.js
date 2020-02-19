import React from 'react';
import { addFeature } from "../action/addFeature";
import { connect } from "react-redux";
const AddedFeature = props => {
  console.log("I am feature props", props)
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={props.addFeature} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return{
    state,
    action: addFeature
  }
}

export default connect(
  mapStateToProps,
  { addFeature }
)(AddedFeature);
