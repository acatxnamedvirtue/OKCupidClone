OKCupid.Models.Profile = Backbone.Model.extend({
  urlRoot: 'api/profiles/',

  toJSON: function() {
    return {profile: _.clone(this.attributes)};
  },

  alreadyLiked: function() {
    var liked = false;
    this.likers().forEach(function(liker) {
      if(liker.id === OKCupid.CurrentUser.id) {
        liked = true;
      }
    });

    return liked;
  },

  user: function() {
    return OKCupid.Users.findWhere({ id: this.get('user_id') });
  },

  likes: function() {
    return OKCupid.Likes.where({ profile_id: this.id })
  },

  likers: function() {
    var likes = this.likes();

    var likers = [];

    likes.forEach(function(like) {
      var user = OKCupid.Users.findWhere({ id: like.get('liker_id')})
      likers.push(user);
    });

    return likers;
  }
});
