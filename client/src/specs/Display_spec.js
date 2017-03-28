var assert = require('assert');
var React = require('react');
var Display = require('../components/Display.jsx');
var shallow = require('enzyme').shallow;

describe('Test Display Component', function() {

  var display;

  beforeEach(function(){
    display = shallow(<Display title="Display Component" />);
  });

  it('should have title prop passed in',function() {
    assert.equal("Display Component", display.instance().props.title);
  });
  
  it('should start with count of 0', function(){
    assert.equal(0, display.instance().state.count);
  });

  it('should increment count on button click', function(){
    display.find('#counter').simulate('click');
    assert.equal(1, display.instance().state.count);
  });

  it('should update display on button click', function(){
    display.find('#counter').simulate('click');
    assert.equal("Count: 1", display.find('h3').text());
  });







})