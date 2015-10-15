OKCupid.Views.ProfilesIndexItem = Backbone.CompositeView.extend({
  tagName: 'li',
  template: JST['profiles/profilesIndexItem'],

  initialize: function() {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function() {
    var user = this.model.user()
    var content = this.template({ profile: this.model, user: user });
    this.$el.html(content);

    return this;
  }
})
