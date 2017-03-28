var React = require('react');
var ReactDOM = require('react-dom');

var Container = require('./components/Container.jsx');

window.onload = function(){
  ReactDOM.render(
    <Container />,
    document.getElementById('app')
  );
}
