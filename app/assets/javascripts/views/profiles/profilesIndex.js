OKCupid.Views.ProfilesIndex = Backbone.CompositeView.extend({
  template: JST['profiles/profilesIndex'],

  initialize: function() {
    this.listenTo(this.collection, 'add change remove reset', this.render);
    this.listenTo(OKCupid.Users, 'add change remove reset', this.render);
  },

  render: function() {
    var content = this.template({ profiles: this.collection });
    this.$el.html(content);

    this.collection.each(function(profile) {
      if(OKCupid.CurrentUser.get('id') === profile.get('user_id')) { return; }
      var indexItem = new OKCupid.Views.ProfilesIndexItem({ model: profile });
      this.$('ul.profiles').append(indexItem.render().$el);
    }.bind(this));

    return this;
  }
});
