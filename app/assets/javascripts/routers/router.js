OKCupid.Routers.Router = Backbone.Router.extend({
  routes: {
    '' : 'profilesIndex',
    'profiles/:id' : 'profileShow',
    'profiles/:id/edit' : 'profileEdit'
  },

  initialize: function(options) {
    this.collection = options.collection;
    this.$rootEl = options.$rootEl;
  },

  profileShow: function(id) {
    var profile = this.collection.getOrFetch(id);
    var view = new OKCupid.Views.ProfileShow({ model: profile });
    this._swapView(view);
  },

  profileEdit: function(id) {
    var profile = this.collection.getOrFetch(id);
    var view = new OKCupid.Views.ProfileForm({ collection: this.collection, model: profile });
    this._swapView(view);
  },

  profilesIndex: function() {
    var profiles = this.collection;
    profiles.fetch();
    var view = new OKCupid.Views.ProfilesIndex({ collection: profiles });
    this._swapView(view);
  },

  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
})
