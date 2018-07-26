import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSingleShip } from '../../store/ship';
import { addToCart } from '../../store/cart';

class SingleShipPage extends Component {

  componentDidMount() {
    this.props.fetchSingleShip();
  }

  render() {

    const singleShip = this.props.singleShip;

    return (
      <div>
        <h3>{singleShip.name}</h3>
        <h3>{singleShip.price}</h3>
        <img src={singleShip.imageUrl} />
        <p>Quantity:</p>
        <button onClick={() => putInCart(product)}>add to cart</button> 

        <hr />

        <p>Manufacturer: {singleShip.manufacturer}</p>
        <p>Model: {singleShip.model}</p>
      </div>
    )

  }
}


const mapStateToProps = state => {
  return {
    singleShip: state.singleShip
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSingleShip: shipId => (dispatch(fetchSingleShip(shipId))),
    putInCart: (product) => dispatch(addToCart(product))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleShipPage);