import React from 'react';
import  Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import Fish from './Fish'
import sampleFishes from '../sample-fishes';
import base from "../base";
class App extends React.Component{
  state = {
    fishes:{},
    order:{}
  }
  componentDidMount(){
    //reinstate local LocalStorage
    var localStorageRef = JSON.parse(localStorage.getItem(this.props.match.params.storeId));
    if(localStorageRef){
      this.setState({
        order:localStorageRef
      });
    }

    this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`,{context:this,state: 'fishes'});
  }

  componentDidUpdate(){
    console.log(this.state.order);
    localStorage.setItem(this.props.match.params.storeId,JSON.stringify(this.state.order));
  }

  componentWillUnmount(){
    base.removeBinding(this.ref);
  }
  validateFish = (fish) => {
    var isNotEmpty = (val) => {
      var isValid = false;
      if(typeof val !=='undefined' && val !== ''){
        isValid = true;
      }
      return isValid;
    }
    var nameError='';
    var priceError='';
    var statusError='';
    var descError='';

    var nameValid = isNotEmpty(fish.name);
    if(!nameValid){
      nameError = 'Please input a value for name.'
    }
    var priceValid = false;
    if(isNotEmpty(fish.price) && ( !isNaN(parseFloat(fish.price)) ) ){
      priceValid = true;
    }
    if(!priceValid){
      priceError = 'Please input a numberic value for price.'
    }
    var statusValid = isNotEmpty(fish.status);
    if(!statusValid){
      statusError =  'Please choose a product status.';
    }
    var descValid = isNotEmpty(fish.desc);
    if(!descValid){
      descError = 'Please enter a product description.';
    }
    return {
      name:{
        isValid:nameValid,
        errorMessage:nameError
      },
      price:{
        isValid:priceValid,
        errorMessage:priceError
      },
      status:{
        isValid:statusValid,
        errorMessage:statusError
      },
      desc:{
        isValid:descValid,
        errorMessage:descError
      }
    }

  }

  addFish = (fish) => {
    //take copy of state
    var fishes = {...this.state.fishes};
    fishes['fish'+Date.now()] = fish;
    this.setState({
      fishes: fishes
    })
  }

  editFish = (key,fish) => {
    var fishes = {...this.state.fishes};
    fishes[key] = fish;
    this.setState({
      fishes:fishes
    });
  }
  loadSampleFishes = () => {
    this.setState({
      fishes: sampleFishes
    })
  }

  addToOrder = (key) => {
    var order = {...this.state.order};
    order[key] = order[key] + 1 || 1;
    this.setState({
      order : order
    })
  }



  render(){

    return (
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header tagline='Fresh Seafood Market'/>
          <ul className='fishes'>
            {Object.keys(this.state.fishes).map(key => <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder = {this.addToOrder}/>)}
          </ul>
        </div>
        <Order order={this.state.order} fishes={this.state.fishes}/>
        <Inventory fishes={this.state.fishes} validateFish = {this.validateFish} editFish={this.editFish} addFish = {this.addFish} loadSampleFishes={this.loadSampleFishes} />
      </div>
    )
  }
}

export default App;
