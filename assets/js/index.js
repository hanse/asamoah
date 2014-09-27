/** @jsx React.DOM */
var React = require('react');

var App = React.createClass({
  displayName: 'App',

  render: function() {
    return (
      <blockquote>
        An opionated setup for frontend development using <a href="http://browserify.org/">browserify</a>, <a href="http://learnboost.github.io/stylus/">stylus</a>, <a href="https://github.com/visionmedia/nib">nib</a> and <a href="http://www.gnu.org/software/make/">GNU Make</a>.
      </blockquote>
    );
  }
});

React.renderComponent(
  <App />,
  document.getElementById('app')
);
