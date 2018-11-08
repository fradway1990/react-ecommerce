import React from 'react';
import {formatPrice} from '../helpers';

class Fish extends React.Component{
  addToOrder = () =>{
    this.props.addToOrder(this.props.index);
  }
  render(){
    var {image,name,price,status,desc} = this.props.details;
    var isAvailable = status;
    return (
      <li className='menu-fish'>
        <img src={image} alt={name}/>
        <h3 className='fish-name'>{name}
          <span className='price'>{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button type='button' onClick={this.addToOrder} disabled={!isAvailable}>{(isAvailable)? 'Add to Order': 'Sold Out!'}</button>
      </li>
    );
  }
}

export default Fish;
