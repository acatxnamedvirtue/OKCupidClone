OKCupid.Models.User = Backbone.Model.extend({
  urlRoot: '/users',

  parse: function(response) {
    if(response.sent_messages) {
      this.sentMessages().set(response.sent_messages, {parse: true});
      delete response.sent_messages;
    }

    if(response.received_messages) {
      this.receivedMessages().set(response.received_messages, {parse: true});
      delete response.received_messages;
    }

    if(response.likers) {
      this.likers().set(response.likers, {parse: true});
      delete response.likers;
    }

    if(response.liked_users) {
      this.likedUsers().set(response.liked_users, {parse: true});
      delete response.liked_users;
    }

    if(response.liked_profiles) {
      this.likedProfiles().set(response.liked_profiles);
      delete response.liked_profiles;
    }

    if(response.likes) {
      this.likes().set(response.likes);
      delete response.likes;
    }

    return response;
  },

  toJSON: function() {
    return {user: _.clone(this.attributes)};
  },

  likedProfiles: function() {
    this._likedProfiles = this._likedProfiles || new OKCupid.Collections.Profiles();
    return this._likedProfiles;
  },

  likes: function() {
    this._likes = this._likes || new OKCupid.Collections.Likes();
    return this._likes;
  },

  likers: function() {
    this._likers = this._likers || new OKCupid.Collections.Users();
    return this._likers;
  },

  likedUsers: function() {
    this._likedUsers = this._likedUsers || new OKCupid.Collections.Users();
    return this._likedUsers;
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
