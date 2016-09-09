var accountSid = 'AC009796708ec6919995a6d68c26c40f51';
var authToken = '3223127604ae0522359bee1f01609260';
var client = require('twilio')(accountSid, authToken);

module.exports = function() {

  function messageMaker(to, from, body) {
    client.messages.create({
      to: to,
      from: from,
      body: body
    }, function(err, message) {
      console.log(message.sid);
    });
  }

  function _notifyPerson(status) {
    if(status === 'start') {
      messageMaker('+18083891009','+18082011473', 'Grandpa Gandalf has started his meeting');
    }
    if(status === 'stop') {
      messageMaker('+18083891009','+18082011473', 'Grandpa Gandalf has ended his meeting');
    }
  }

  return {
    notifyPerson: _notifyPerson
  };
};
