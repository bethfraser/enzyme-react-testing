var React = require('react');
var Display = require('./Display.jsx');

var Container = React.createClass({

  getInitialState: function(){
    return {};
  },

  componentDidMount: function(){
  },

  render: function(){
    
    return(
      <div>
        <h2>React Testing</h2>
        <Display />
      </div> 
      );
  }
});

module.exports = Container;









// componentWillUpdate: function(nextProps, nextState){
//   if (!this.state.price) return;

//   var h3 = document.querySelector('h3');

//   var currentRate = this.state.price;
//   var newRate = nextState.price;

//   if (currentRate == newRate){
//     console.log(newRate);
//     console.log("No change");
//   }
//   else if (currentRate > newRate){
//     console.log(nextState.price)
//     console.log("Change!! Decreasing...")
//     h3.style.color = "red";
//   }
//   else if (currentRate <= newRate){
//     console.log(nextState.price)
//     console.log("Change!! Increasing...")
//     h3.style.color = "green";
//   }
// },