OKCupid.Models.Message = Backbone.Model.extend({
  urlRoot: 'api/messages/',

  toJSON: function() {
    return {message: _.clone(this.attributes)};
  },

  parse: function(response) {
    if(response.sender) {
      this._sender = response.sender;
      delete response.sent_messages;
    }

    if(response.recipient) {
      this._recipient = response.recipient;
      delete response.sent_messages;
    }
  },

  sender: function() {
    this._sender = this._sender || {};
    return this._sender;
  },

  recipient: function() {
    this._recipient = this._recipient || {};
    return this._recipient;
  }
});
