OKCupid.Routers.Router = Backbone.Router.extend({
  routes: {
    '' : 'profilesIndex',
    'profiles/:id' : 'profileShow',
    'profiles/:id/edit' : 'profileEdit',
    'messages/' : 'messagesIndex',
    'messages/new' : 'messageNew',
    'messages/:id' : 'messageShow',
    'likes/' : 'likesIndex',
    'questions/' : 'questionsIndex',
    'questions/new' : 'questionNew',
    'questions/:id' : 'questionShow'
  },

  initialize: function(options) {
    this.$rootEl = options.$rootEl;
  },

  profileShow: function(id) {
    var profile = OKCupid.Profiles.getOrFetch(id);
    var view = new OKCupid.Views.ProfileShow({ model: profile });
    this._swapView(view);
  },

  profileEdit: function(id) {
    var profile = OKCupid.Profiles.getOrFetch(id);
    var view = new OKCupid.Views.ProfileForm({ collection: OKCupid.Profiles, model: profile });
    this._swapView(view);
  },

  profilesIndex: function() {
    OKCupid.Profiles.fetch();
    var view = new OKCupid.Views.ProfilesIndex({ collection: OKCupid.Profiles });
    this._swapView(view);
  },

  messagesIndex: function() {
    var sentMessages = OKCupid.CurrentUser.sentMessages();
    var receivedMessages = OKCupid.CurrentUser.receivedMessages();
    var view = new OKCupid.Views.MessagesIndex({
      sentMessages: sentMessages, receivedMessages: receivedMessages
    });
    this._swapView(view);
  },

  messageNew: function() {
    var message = new OKCupid.Models.Message({ sender_id: OKCupid.CurrentUser.id });
    var view = new OKCupid.Views.MessageForm({
      collection: OKCupid.CurrentUser.sentMessages(), model: message
    });
    this._swapView(view);
  },

  messageShow: function(id) {
    var message = OKCupid.CurrentUser.sentMessages().getOrFetch(id) ||
      OKCupid.CurrentUser.receivedMessages().getOrFetch(id);
    var view = new OKCupid.Views.MessageShow({ model: message });
    this._swapView(view);
  },

  likesIndex: function() {
    var likedUsers = OKCupid.CurrentUser.likedUsers();
    var likers = OKCupid.CurrentUser.likers();
    var view = new OKCupid.Views.LikesIndex({
      likers: likers, likedUsers: likedUsers
    });
    this._swapView(view);
  },

  questionsIndex: function() {
    var questions = OKCupid.Questions;
    var view = new OKCupid.Views.QuestionsIndex({ collection: questions });
    this._swapView(view);
  },

  questionShow: function(id) {
    var question = OKCupid.Questions.getOrFetch(id);
    var view = new OKCupid.Views.QuestionShow({ model: question });
    this._swapView(view);
  },

  questionNew: function() {
    var question = new OKCupid.Models.Question({ sender_id: OKCupid.CurrentUser.id });
    var view = new OKCupid.Views.QuestionForm({
      collection: OKCupid.CurrentUser.authoredQuestions(), model: question
    });
    this._swapView(view);
  },

  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
})
