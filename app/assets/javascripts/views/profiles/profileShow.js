OKCupid.Views.ProfileShow = Backbone.CompositeView.extend({
  template: JST['profiles/profileShow'],
  events: {
    'click .like' : 'toggleLike'
  },

  initialize: function(options) {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function() {
    var user = this.model.user();
    var content = this.template({ profile: this.model, user: user });
    this.$el.html(content);

    return this;
  },

  toggleLike: function(e) {
    if(this.model.alreadyLiked()) {
      var like = OKCupid.CurrentUser.likes().findWhere({profile_id: this.model.id});
      like.destroy();

    } else {
      var like = new OKCupid.Models.Like();
      var attrs = { profile_id: this.model.id, liker_id: OKCupid.CurrentUser.id };
      var that = this;

      like.save(attrs, {
        success: function() {
          OKCupid.CurrentUser.likes().add(like);
        }
      });
    }
    // var likes = this.model.likes();
    // if(this.model.alreadyLiked()) {
    //   this.model.likes().forEach(function(like){
    //     if(like.get('liker_id') === OKCupid.CurrentUser.id) {
    //       debugger
    //       OKCupid.Likes.getOrFetch(like.id).destroy();
    //       OKCupid.Likes.remove(like.id);
    //     }
    //   });
    // } else {
    //   var like = new OKCupid.Models.Like()
    //   var attrs = { profile_id: this.model.id, liker_id: OKCupid.CurrentUser.id }
    //
    //   like.save(attrs, {
    //     success: function() {
    //       OKCupid.Likes.add(like)
    //     }
    //   });
    // }
  }
});
