import React from 'react'
require('../style/singleUser.css')



class ReviewForm extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
      content: '',
      rate: '',
      userId: this.props.user.id,
      starshipId:this.props.ship.id
    };
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    
    this.setState({

      [event.target.name]: event.target.value,
      
    })
  }
  
  render() {
    return (
      <div>

        <form className='color' onSubmit={evt => this.props.handleSubmit(evt, this.state)}>
        <div className='form-container'>
          <label>User Reviews:</label>
            <input name="content" type = "text" value = {this.state.content || ''} onChange={this.handleInputChange} />

            <hr />

            <label htmlFor="rate">Rating (0-5):</label>
            <input name="rate" type = "text" value = {this.state.rate || ''} onChange={this.handleInputChange} />

            <hr />

            <h1 className='err-handler'>{!this.state.content ? "name required": "name is done"}</h1>
          
            <h1 className='err-handler'>{!(this.state.rate < 5 ) ? "rate should be 0-5": "rate is required"}</h1>
            <button type="submit">Add review</button>
          </div>
        </form>
      </div>
    )
  }
}

export default ReviewForm;