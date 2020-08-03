import React, { Component } from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
import css from './styles.css'


class Proxy extends Component {
  constructor(props) {
    super(props);
    this.state = {productNumber: 549504785};
  }

  render() {

    return (<div>Proxy Service is Rendering</div>);

  }
};


ReactDom.render(<Proxy />, document.getElementById('proxy'));