import SmallAppDispatcher from '../dispatcher/SmallAppDispatcher.js';
import SmallConstants from '../constants/SmallConstants.js';

const ActionTypes = SmallConstants.ActionTypes;

module.exports = {

  receiveLogin: function(json, errors) {
    SmallAppDispatcher.handleServerAction({
      type: ActionTypes.LOGIN_RESPONSE,
      json: json,
      errors: errors
    });
  },

 // ... 
};