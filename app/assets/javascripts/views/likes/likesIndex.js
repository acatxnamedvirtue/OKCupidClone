OKCupid.Views.LikesIndex = Backbone.CompositeView.extend({
  template: JST['likes/likesIndex'],

  initialize: function(options) {
    this.likedUsers = options.likedUsers;
    this.likers = options.likers;
    this.listenTo(this.likedUsers, 'add change remove reset', this.render);
    this.listenTo(this.likers, 'add change remove reset', this.render);
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);

    this.likers.each(function(user) {
      var indexItem = new OKCupid.Views.LikesIndexItem({ model: user });
      this.$('ul.likers').append(indexItem.render().$el);
    }, this);

    this.likedUsers.each(function(user) {
      var indexItem = new OKCupid.Views.LikesIndexItem({ model: user });
      this.$('ul.liked-users').append(indexItem.render().$el);
    }, this);

    return this;
  }
});
