import React from 'react';
import FishForm from './FishForm';

class AddFishForm extends React.Component{
  state = {
    name:{
      isValid:false,
      errorMessage:''
    },
    price:{
      isValid:false,
      errorMessage:''
    },
    status:{
      isValid:false,
      errorMessage:''
    },
    desc:{
      isValid:false,
      errorMessage:''
    }
  };
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();


  createFish = (e) => {
    var _this = this;
    e.preventDefault();
    _this.validateFish(function(){
      if(_this.state.name.isValid && _this.state.price.isValid && _this.state.status.isValid && _this.state.desc.isValid){
        const fish = {
          name : _this.nameRef.value.value.trim(),
          price : parseFloat(_this.priceRef.value.value.trim()),
          status : _this.statusRef.value.value.trim(),
          desc : _this.descRef.value.value.trim()
        }
        _this.props.addFish(fish);
        console.log(fish);
        e.currentTarget.reset();
      }else{
        console.log("Fish Not Valid");
      }
    });
  }
  render(){
    return(
      <FishForm submitAction={this.createFish}/>
    );
  }
}

export default AddFishForm;
