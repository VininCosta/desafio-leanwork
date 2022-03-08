import React, { Component } from 'react';
import Bg from './img/bg.jpg';

export class Left extends Component {
  render() {
    return (
        <div className='left'>
      <img src={Bg} />
      </div> 
    )
  }
}

export default Left;