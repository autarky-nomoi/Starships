
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchShips } from '../../store/ship';
// require('../style/shipcard.css')

//Not really sure about this page, but it would be useful, ask team

import React, { Component } from 'react'

class Shipcard extends Component {
  render() {
    return (
      <div>
        <img />
        <p> Picture</p> 
        <div>
            <h4><b> Ship Name</b></h4>
            <p>Information</p>
        </div>
      </div>
    )
  }
}


export default Shipcard
{/* 
</head>
<body>

<h2>Round Card</h2>

<div class='card-holder'>

<div class="card">
  <img src="img_avatar2.png" alt="Avatar" style="width:100%">
  <div class="container">
    <h4><b>Jane Doe</b></h4> 
    <p>Interior Designer</p> 
  </div>
</div>


<div class="card">
  <img src="img_avatar2.png" alt="Avatar" style="width:100%">
  <div class="container">
    <h4><b>Jane Doe</b></h4> 
    <p>Interior Designer</p> 
  </div>
</div>

<div class="card">
  <img src="img_avatar2.png" alt="Avatar" style="width:100%">
  <div class="container">
    <h4><b>Jane Doe</b></h4> 
    <p>Interior Designer</p> 
  </div>
</div>

</div> */}

//style

{/* <style>
.card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 20%;
    border-radius: 5px;
    display: inline-block;
}

.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    
}

img {
    border-radius: 5px 5px 0 0;
}

.container {
    padding: 2px 16px;
}

.card-holder {
	width: 100%;
    text-align: center;
}

</style> */}