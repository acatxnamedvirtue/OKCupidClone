OKCupid.Models.User = Backbone.Model.extend({
  urlRoot: 'users/',

  toJSON: function() {
    return {user: _.clone(this.attributes)};
  },

  profile: function() {
    return OKCupid.Profiles.findWhere({ user_id: this.id });
  },

  likes: function() {
    return OKCupid.Likes.where({ liker_id: this.id });
  },

  liked_profiles: function() {
    var likes = this.likes();

    var liked_profiles = [];

    likes.forEach(function(like) {
      var profile = OKCupid.Profiles.findWhere({ id: like.get('profile_id')})
      liked_profiles.push(profile);
    });

    return liked_profiles;
  }
});
