OKCupid.Views.ProfileShow = Backbone.CompositeView.extend({
  template: JST['profiles/profileShow'],
  events: {},

  initialize: function(options) {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function() {
    var user = OKCupid.Users.getOrFetch(this.model.get('user_id'))
    var content = this.template({ profile: this.model, user: user });
    this.$el.html(content);

    return this;
  }
});
