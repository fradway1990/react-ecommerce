import React from "react";
import { getFunName } from '../helpers';
class StorePicker extends React.Component {
  /*constructor(){
    super();
    this.goToStore = this.goToStore.bind(this);
  }*/
  storeName = React.createRef();
  goToStore = (e) =>{
    e.preventDefault();
    this.props.history.push(`/store/${this.storeName.value.value}`);

  }
  render() {
    return (
      <form className="store-selector" onSubmit= {this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input type="text" required ref= {this.storeName} placeholder="Store Name" defaultValue= { getFunName() } />
        <button type="submit">Visit Store →</button>
      </form>
    );
  }
}

export default StorePicker;
