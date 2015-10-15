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
    'questions/:id' : 'questionShow',
    'session/new' : 'signIn',
    'users/:id/edit' : 'userEdit',
    'users/:id' : 'userShow',
    'splash' : 'splashPage',
    '_=_' : 'profilesIndex',
    'random' : 'random'
  },

  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    OKCupid.Users = new OKCupid.Collections.Users();
    OKCupid.Users.fetch();
  },

  splashPage: function() {
    var view = new OKCupid.Views.SplashPage();
    this._swapView(view);
  },

  random: function() {
    var id = Math.floor(Math.random() * OKCupid.Profiles.length)+1;
    Backbone.history.navigate('#/profiles/' + id, { trigger: true });
  },

  profileShow: function(id) {
    if (!this._requireSignedIn()) { return; }

    var profile = OKCupid.Profiles.getOrFetch(id);
    var view = new OKCupid.Views.ProfileShow({ model: profile });
    this._swapView(view);
  },

  profileEdit: function(id) {
    if (!this._requireSignedIn()) { return; }
    var profile = OKCupid.Profiles.getOrFetch(id);
    var view = new OKCupid.Views.ProfileForm({ collection: OKCupid.Profiles, model: profile });
    this._swapView(view);
  },

  profilesIndex: function() {
    if (!this._requireSignedIn()) { return; }
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

  userEdit: function(id) {
    // if (!this._requireSignedIn()) { return; }
    OKCupid.CurrentUser.fetch();
    var model = OKCupid.CurrentUser;
    var formView = new OKCupid.Views.UserForm({
      collection: OKCupid.Users,
      model: model
    });

    this._swapView(formView);
  },

  signIn: function(callback) {
    if (!this._requireSignedOut(callback)) { return; }

    var signInView = new OKCupid.Views.SignIn({
      callback: callback
    });

    this._swapView(signInView);
  },

  _requireSignedIn: function(callback) {
    if (!OKCupid.CurrentUser.isSignedIn()) {
      if(callback){
        this.signIn(callback);
      } else {
        this._goHome();
      }
      return false;
    }

    return true;
  },

  _requireSignedOut: function(callback) {
    if (OKCupid.CurrentUser.isSignedIn()) {
      callback = callback || this._goHome.bind(this);
      callback();
      return false;
    }

    return true;
  },

  _goHome: function() {
    Backbone.history.navigate("#/splash", { trigger: true });
  },

  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
})
