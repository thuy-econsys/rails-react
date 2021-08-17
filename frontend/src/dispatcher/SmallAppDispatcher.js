import SmallConstants from '../constants/SmallConstants.js';
import flux from 'flux';
const Dispatcher = flux.Dispatcher;
import assign from 'object-assign';

const PayloadSources = SmallConstants.PayloadSources;

const SmallAppDispatcher = assign(new Dispatcher(), {

  handleServerAction: function(action) {
    const payload = {
      source: PayloadSources.SERVER_ACTION,
      action: action
    };
    this.dispatch(payload);
  },

  handleViewAction: function(action) {
    const payload = {
      source: PayloadSources.VIEW_ACTION,
      action: action
    };
    this.dispatch(payload);
  }
});

module.exports = SmallAppDispatcher;