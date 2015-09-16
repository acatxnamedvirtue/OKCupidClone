OKCupid.Models.User = Backbone.Model.extend({
  urlRoot: 'users/',

  parse: function(response) {
    if(response.sent_messages) {
      this.sentMessages().set(response.sent_messages, {parse: true});
      delete response.sent_messages;
    }

    if(response.received_messages) {
      this.receivedMessages().set(response.received_messages);
      delete response.received_messages;
    }

    if(response.likes) {
      this.likes().set(response.likes);
      delete response.likes;
    }

    if(response.liked_profiles) {
      this.likedProfiles().set(response.liked_profiles);
      delete response.liked_profiles;
    }

    debugger

    return response;
  },

  toJSON: function() {
    return {user: _.clone(this.attributes)};
  },

  profile: function() {
    var profile = OKCupid.Profiles.findWhere({ user_id: this.id });
    return profile;
  },

  likes: function() {
    this._likes = this._likes || new OKCupid.Collections.Likes();
    return this._likes;
  },

  likedProfiles: function() {
    this._likedProfiles = this._likedProfiles || new OKCupid.Collections.Profiles();
    return this._likedProfiles;
  },

  sentMessages: function() {
    this._sentMessages = this._sentMessages || new OKCupid.Collections.Messages();
    return this._sentMessages;
  },

  receivedMessages: function() {
    this._receivedMessages = this._receivedMessages || new OKCupid.Collections.Messages();
    return this._receivedMessages;
  }
});
