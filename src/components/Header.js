import React from 'react';
import { connect } from "react-redux";

import { carReducer } from "../reducers/carReducer";




const Header = props => {
  console.log("I am header props", props)
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.image} alt={props.name} />
      </figure>
      <h2>{props.name}</h2>
      <p>Amount: `${props.price}`</p>
    </>
  );
};


const mapStateToProps = state => {
  return{
    state: state.carReducer
  };

};

export default connect(
  mapStateToProps,
  {carReducer}
)(Header);


