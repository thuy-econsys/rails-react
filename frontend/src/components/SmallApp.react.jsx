var React = require('react');
  import ReactRouter from 'react-router';
  // FIXME RouteHandler is deprecated
  const RouteHandler = ReactRouter.RouteHandler; // https://stackoverflow.com/a/36533075
  import Header from '../components/Header.react.jsx';
  import SessionStore from '../stores/SessionStore.react.jsx';

  function getStateFromStores() {
    return {
      isLoggedIn: SessionStore.isLoggedIn(),
      email: SessionStore.getEmail()
    };
  }

  var SmallApp = React.createClass({

    getInitialState: function() {
      return getStateFromStores();
    },

    componentDidMount: function() {
      SessionStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
      SessionStore.removeChangeListener(this._onChange);
    },

    _onChange: function() {
      this.setState(getStateFromStores());
    },

    render: function() {
      return (
        <div className="app">
          <Header 
            isLoggedIn={this.state.isLoggedIn}
            email={this.state.email} />
          <RouteHandler/>
        </div>
      );
    }

  });

  module.exports = SmallApp;