OKCupid.Models.Message = Backbone.Model.extend({
  urlRoot: 'api/messages/',

  toJSON: function() {
    return {message: _.clone(this.attributes)};
  },

  sender: function() {
    return OKCupid.Users.getOrFetch(this.get('sender_id'));
  },

  recipient: function() {
    return OKCupid.Users.getOrFetch(this.get('recipient_id'));
  }
});
