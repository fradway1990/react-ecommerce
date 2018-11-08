import React from 'react';

class FishForm extends React.Component{
  render(){

    return (
      <React.Fragment>
        <div className='errors'>

        </div>
        <form className='fish-edit' onSubmit = {this.props.submitAction}>
          < input name ="name"  ref = {this.nameRef} type = "text" placeholder="Name"/>
          < input name ="price" ref = {this.priceRef} type = "text" placeholder="Price"/>
          < select name ="status" ref = {this.statusRef} placeholder="Status">
            <option value="available">Fresh!</option>
            <option value="unavailable">Sold Out!</option>
          </select>
          < textarea name ="desc" ref = {this.descRef}  placeholder="Description"></textarea>
          < input name ="image" ref = {this.imageRef} placeholder="Image"/>
          <button type="submit">+ Add Fish</button>
        </form>
      </React.Fragment>
    )
  }
}

export default FishForm
