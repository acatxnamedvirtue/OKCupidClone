OKCupid.Views.ProfilesIndex = Backbone.CompositeView.extend({
  template: JST['profiles/profilesIndex'],

  initialize: function() {
    this.listenTo(this.collection, 'add change remove reset', this.render);
  },

  render: function() {
    var content = this.template({ profiles: this.collection });
    this.$el.html(content);

    var rows;
    if(this.collection.length % 3 === 0) {
      rows = this.collection.length / 3;
    } else {
      rows = Math.floor(this.collection.length / 3) + 1;
    }
    var total_height = rows * 280;
    this.$('ul.profiles').css({"height": total_height + "px"});

    this.collection.each(function(profile) {
      if(OKCupid.CurrentUser.id === profile.user().id) { return; }
      var indexItem = new OKCupid.Views.ProfilesIndexItem({ model: profile });
      this.$('ul.profiles').append(indexItem.render().$el);
    }.bind(this));

    return this;
  }
});
