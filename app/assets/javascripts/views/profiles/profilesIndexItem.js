OKCupid.Views.ProfilesIndexItem = Backbone.CompositeView.extend({
  tagName: 'li',
  template: JST['profiles/profilesIndexItem'],

  initialize: function() {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function() {
    var user = OKCupid.Users.getOrFetch(this.model.get('user_id'))
    var content = this.template({ profile: this.model, user: user });
    this.$el.html(content);

    return this;
  }
})
