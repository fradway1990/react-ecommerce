import React from 'react';
import {formatPrice} from '../helpers';

class Order extends React.Component{
  renderFishes = (key) => {
        if(!this.props.fishes[key]){
          return null;
        }
        if(this.props.fishes[key].status){
          return (
            <li key={'order'+key} className='order'>
              {this.props.order[key] +' lbs '}
              {this.props.fishes[key]['name']+' '}
              {formatPrice(this.props.order[key] * this.props.fishes[key]['price'])}
            </li>
          )
        }else{
          return (
            <li key={key}>
              Sorry {this.props.fishes[key]['name']} is unavailable.
            </li>
          );
        }
  }
  render(){
    var calculateTotal = () => {
      var total = 0;

      if(Object.keys(this.props.order).length !== 0){
        for(var key in this.props.order){
          if(!this.props.fishes[key]){
            break;
          }
          if(this.props.fishes[key]['status']){
            total+= (this.props.fishes[key]['price'] * this.props.order[key]);
          }
        }
      }
      return formatPrice(total);
    }

    return (

      <div className='order-wrap'>
        <h2>Order</h2>
        <ul className='order'>
          {Object.keys(this.props.order).map(key => this.renderFishes(key))}
        </ul>
        <div className='total'>
          Total:
          <strong>{calculateTotal()}</strong>
        </div>
      </div>
    );
  }
}

export default Order;
