import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchShips } from '../../store/ship';
import { addToCart } from '../../store/cart';
import ShipCard from '../cards/ShipCard';

//possibly want to render ship cards on this page instead
//add isLoading

class ShipList extends Component {
  componentDidMount() {
    this.props.fetchShips();
  }

  render() {
    const { ships, putInCart } = this.props;

    return (
      <div>
        <h1>StarShips</h1>
          <ul>
            {ships.map(ship => (
                  <ShipCard ship={ship} key={ship.id}/>
            ))}
          </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ships: state.ship.ships
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchShips: () => dispatch(fetchShips()),
    putInCart: (product) => dispatch(addToCart(product))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShipList);
