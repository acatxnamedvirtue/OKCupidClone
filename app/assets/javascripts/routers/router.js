OKCupid.Routers.Router = Backbone.Router.extend({
  routes: {
    '' : 'profilesIndex',
    'profiles/:id' : 'profileShow',
    'profiles/:id/edit' : 'profileEdit',
    'messages/' : 'messagesIndex',
    'messages/new' : 'messageNew',
    'messages/:id' : 'messageShow'

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
    OKCupid.Messages.fetch();
    var view = new OKCupid.Views.MessagesIndex({ collection: OKCupid.Messages });
    this._swapView(view);
  },

  messageNew: function() {
    var message = new OKCupid.Models.Message();
    var view = new OKCupid.Views.MessageForm({ collection: OKCupid.Messages, model: message});
    this._swapView(view);
  },

  messageShow: function(id) {
    var message = OKCupid.Messages.getOrFetch(id);
    var view = new OKCupid.Views.MessageShow({ model: message });
    this._swapView(view);
  },

  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
})
