import ServerActionCreators from '../actions/ServerActionCreators.react.jsx';
import request from 'superagent';

module.exports = {

  login: function(email, password) {
    request.post('http://localhost:3002/v1/login')
      .send({ username: email, password: password, grant_type: 'password' })
      .set('Accept', 'application/json')
      .end(function(error, res){
        if (res) {
          if (res.error) {
            const errorMsgs = _getErrors(res);
            ServerActionCreators.receiveLogin(null, errorMsgs);
          } else {
            json = JSON.parse(res.text);
            ServerActionCreators.receiveLogin(json, null);
          }
        }
      });
  },
  // ...
};