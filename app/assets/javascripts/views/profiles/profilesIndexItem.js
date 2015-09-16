OKCupid.Views.ProfilesIndexItem = Backbone.CompositeView.extend({
  tagName: 'li',
  template: JST['profiles/profilesIndexItem'],

  initialize: function() {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function() {
    var username = this.model.user().username
    var content = this.template({ profile: this.model, username: username });
    this.$el.html(content);

    return this;
  }
})
