import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchShips } from '../../store/ship';
import { addToCart } from '../../store/cart';

//possibly want to render ship cards on this page instead
//add isLoading

class ShipList extends Component {

  componentDidMount() {
    this.fetchShips();
  }

  render() {

    const { ships, putInCart } = this.props;

    return (
      <div>
        <h1>StarShips</h1>
          <ul>
            {ships.map(ship => (
              <div key={ship.id}>

                <li>
                  <Link to={`/ship/${ship.id}`}>
                    <img src={ship.imageUrl} />
                  </Link>
                  <h3>{ship.name}</h3>
                  <p>Ship Model: {ship.model}</p>
                  <p>Ship Manufacturer: {ship.manufacturer}</p>
                  <p>Ship Price: {ship.price}</p>
                  <button onClick={() => putInCart(product)}>add to cart</button> 
                </li>
                
              </div>
            ))}
          </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ships: state.ships
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchShips: () => dispatch(fetchShips()),
    putInCart: (product) => dispatch(addToCart(product))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShipList);
