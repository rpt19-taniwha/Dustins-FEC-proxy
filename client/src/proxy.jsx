import React from 'react';
import ReactDom from 'react-dom';
import css from './styles.css'


const Proxy = () => {
  return (<div>Proxy Service is Rendering</div>)
};



ReactDom.render(<Proxy />, document.getElementById('proxy'));