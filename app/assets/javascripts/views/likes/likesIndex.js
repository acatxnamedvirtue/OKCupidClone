OKCupid.Views.LikesIndex = Backbone.CompositeView.extend({
  template: JST['likes/likesIndex'],

  initialize: function() {
    this.listenTo(this.collection, 'add change remove reset', this.render);
    this.listenTo(OKCupid.Profiles, 'add change remove reset', this.render);
    this.listenTo(OKCupid.Users, 'add change remove reset', this.render);
  },

  render: function() {
    var likedProfiles = OKCupid.CurrentUser.likedProfiles();
    var likers = OKCupid.CurrentUser.profile().likers();

    var content = this.template();
    this.$el.html(content);

    likers.forEach(function(liker) {
      var indexItem = new OKCupid.Views.LikesIndexItem({
        collection: this.collection, model: liker
      });
      this.$('ul.likers').append(indexItem.render().$el);
    }.bind(this));

    likedProfiles.forEach(function(profile) {
      var user = OKCupid.Users.getOrFetch(profile.get('user_id'));
      var indexItem = new OKCupid.Views.LikesIndexItem({
        collection: this.collection, model: user
      });
      this.$('ul.liked-profiles').append(indexItem.render().$el);
    }.bind(this));

    return this;
  }
});
