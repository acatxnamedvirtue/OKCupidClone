OKCupid.Models.User = Backbone.Model.extend({
  urlRoot: '/api/users',

  parse: function(response) {
    if(response.profile_pic) {
      this._profilePic = response.profile_pic;
      delete response.profile_pic;
    }

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

    if(response.questions) {
      this.questions().set(response.questions);
      delete response.questions;
    }

    if(response.answered_questions) {
      this.answeredQuestions().set(response.answered_questions);
      delete response.answered_questions;
    }

    if(response.authored_questions) {
      this.authoredQuestions().set(response.authored_questions);
      delete response.authored_questions;
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
  },

  questions: function() {
    this._questions = this._questions || new OKCupid.Collections.Questions();
    return this._questions;
  },

  answeredQuestions: function() {
    this._answeredQuestions = this._answeredQuestions || new OKCupid.Collections.Questions();
    return this._answeredQuestions;
  },

  authoredQuestions: function() {
    this._authoredQuestions = this._authoredQuestions || new OKCupid.Collections.Questions();
    return this._authoredQuestions;
  },

  profilePic: function() {
    this._profilePic = this._profilePic || 'missing.png'
    return this._profilePic;
  }
});

OKCupid.Models.CurrentUser = OKCupid.Models.User.extend({
  url: '/api/session',

  initialize: function(options) {
    this.listenTo(this, 'change', this.fireSessionEvent);
  },

  isSignedIn: function() {
    return !this.isNew();
  },

  signIn: function(options) {
    var model = this;
    var credentials = {
      'user[username_or_email]': options.usernameOrEmail,
      'user[password]': options.password
    };

    $.ajax({
      url: this.url,
      type: "POST",
      data: credentials,
      dataType: 'json',
      success: function(data) {
        model.set(data);
        options.success && options.success();
      },
      error: function() {
        options.error && options.error();
      }
    });
  },

  signOut: function(options) {
    var model = this;

    $.ajax({
      url: this.url,
      type: "DELETE",
      dataType: "json",
      success: function(data) {
        model.clear();
        options.success && options.success();
      }
    });
  },

  fireSessionEvent: function() {
    if(this.isSignedIn()) {
      this.trigger('signIn');
    } else {
      this.trigger('signOut');
    }
  }
});
