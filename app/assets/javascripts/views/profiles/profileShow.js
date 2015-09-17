OKCupid.Views.ProfileShow = Backbone.CompositeView.extend({
  template: JST['profiles/profileShow'],
  events: {
    'click .like' : 'toggleLike'
  },

  initialize: function(options) {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(OKCupid.CurrentUser.likes(), 'sync remove', this.render)
  },

  render: function() {
    var user = this.model.user();
    var content = this.template({ profile: this.model, user: user });
    this.$el.html(content);
    console.log(user.username);

    return this;
  },

  toggleLike: function(e) {
    if(this.model.alreadyLiked()) {
      var like = OKCupid.CurrentUser.likes().findWhere({profile_id: this.model.id});
      like.destroy();
      OKCupid.CurrentUser.likes().remove(like);
    } else {
      var like = new OKCupid.Models.Like();
      var attrs = { profile_id: this.model.id, liker_id: OKCupid.CurrentUser.id };
      var that = this;

      like.save(attrs, {
        success: function() { OKCupid.CurrentUser.likes().add(like); }
      });
    }
  }
});
