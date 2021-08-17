import SmallAppDispatcher from '../dispatcher/SmallAppDispatcher.js';
import SmallConstants from '../constants/SmallConstants.js';
import SessionStore from '../stores/SessionStore.react.jsx';
import StoryStore from '../stores/StoryStore.react.jsx';
import Events from 'events';
const EventEmitter = Events.EventEmitter;
import assign from 'object-assign';

import Router from 'react-router';
import routes from '../routes.jsx';

const router = Router.create({
  routes: routes,
  location: null // Router.HistoryLocation
});

const ActionTypes = SmallConstants.ActionTypes;
const CHANGE_EVENT = 'change';

const RouteStore = assign({}, EventEmitter.prototype, {
  
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function() {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getRouter: function() {
    return router;
  },

  redirectHome: function() {
    router.transitionTo('app');
  }
});

RouteStore.dispatchToken = SmallAppDispatcher.register(function(payload) {
  SmallAppDispatcher.waitFor([
    SessionStore.dispatchToken,
    StoryStore.dispatchToken
  ]);

  const action = payload.action;
  
  switch(action.type) {

    case ActionTypes.REDIRECT:
      router.transitionTo(action.route);
      break;

    case ActionTypes.LOGIN_RESPONSE:
      if (SessionStore.isLoggedIn()) {
        router.transitionTo('app');
        // Dirty hack, need to figure this out
        $(document).foundation();
      }
      break;
    
    case ActionTypes.RECEIVE_CREATED_STORY:
      router.transitionTo('app');
      break;

    default:
  }
  
  return true;
});

module.exports = RouteStore;

