OKCupid.Views.Header = Backbone.View.extend({
  initialize: function(options) {
    this.listenTo(OKCupid.CurrentUser, 'signIn signOut', this.render);
    this.render();
  },

  events: {
    'click #sign-out-link': 'signOut'
  },

  template: JST['shared/header'],

  render: function() {
    var content = this.template({ CurrentUser: OKCupid.CurrentUser });
    this.$el.html(content);

    return this;
  },

  signOut: function(e) {
    e.preventDefault();
    OKCupid.CurrentUser.signOut({
      success: function() {
        Backbone.history.navigate('#/splash', { trigger: true });
      }
    });
  }
});
