import React, { Component } from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
import css from './styles.css'


class Proxy extends Component {
  constructor(props) {
    super(props);
    this.state = {productNumber: 549504785};
  }

  // componentDidMount() {
  //   $.ajax(`http://ec2-50-18-28-6.us-west-1.compute.amazonaws.com:8000/listing/549504785${this.state.productNumber}`, () => {
  //     success: (data) => {
  //       console.log('data', data);
  //     }
  //   });
  // }


  render() {

    return (<div>Proxy Service is Rendering</div>);

  }
};


ReactDom.render(<Proxy />, document.getElementById('proxy'));