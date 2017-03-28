var React = require('react');

var Display = React.createClass({

  getInitialState: function(){
    return { count: 0 };
  }, 

  increment: function(){
    this.setState({count: this.state.count + 1})
  },

  render: function(){
    return(
        <div>
          <h3>Count: {this.state.count}</h3>
          <button id="counter" onClick={this.increment}>Increment</button>
        </div>
      )
  }

})

module.exports = Display;