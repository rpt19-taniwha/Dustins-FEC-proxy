import React, { Component } from 'react';
import ReactDom from 'react-dom';
import css from './styles.css'


class Proxy extends Component {
  constructor(props) {
    super(props);
    this.state = {productNumber: '5'};
  }

  // componentDidMount() {
  //   this.getProduct();

  // }
  // getProduct() {
  //   $.ajax('/products', {
  //     success: (prod) => {
  //       console.log('prod', prod);
  //       this.setState({productNumber: prod});
  //     }
  //   })


  render() {


    return (<div>Proxy Service is Rendering</div>);

  }
};


ReactDom.render(<Proxy />, document.getElementById('proxy'));