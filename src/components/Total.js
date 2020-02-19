import React from 'react';

import { connect } from 'react-redux';

const Total = props => {
console.log("I am price props", props)

  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
    </div>
  );
};

const mapStateToProps = state => {
  return{
    car: state.car,
    price: state.price,
    additionalPrice: state.additionalPrice
  }
}

export default connect(
  mapStateToProps
)(Total);



