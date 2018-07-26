import React, { Component } from 'react'

class SignUp extends Component {
  constructor(props){
    super(props) 
    this.state = {
      firstname : '',
      lastname : '',
      email : '',
      address : '',
      password : ''
    }
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
  }

  onSubmitHandler(evt){
    evt.preventDefault()
    console.log(this.state)
  }
  onChangeHandler(evt) {
    this.setState({
      [evt.target.name] : evt.target.value
    })
  }
  render() {
    return (
        <div>
            <form onChange={this.onChangeHandler} onSubmit={this.onSubmitHandler}> 
            First name:<br />
            <input type="text" name="firstname" />
            <br />
            Last name:<br />
            <input type="text" name="lastname" />
            <br />
            Email:<br />
            <input type="text" name="email" />
            <br />
            Address:<br />
            <input type="text" name="address" />
            <br />
            Password:<br />
            <input type="text" name="password" />
            <br />
            <button type='submit'> Submit</button>
            </form>
        </div>
    )
  }
}

export default SignUp