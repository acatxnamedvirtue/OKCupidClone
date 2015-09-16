OKCupid.Models.User = Backbone.Model.extend({
  urlRoot: 'users/',

  toJSON: function() {
    return {user: _.clone(this.attributes)};
  },

  profile: function() {
    var profile = OKCupid.Profiles.findWhere({ user_id: this.id });
    return profile;
  },

  likes: function() {
    return OKCupid.Likes.where({ liker_id: this.id });
  },

  likedProfiles: function() {
    var likes = this.likes();

    var likedProfiles = [];

    likes.forEach(function(like) {
      var profile = OKCupid.Profiles.findWhere({ id: like.get('profile_id')})
      likedProfiles.push(profile);
    });

    return likedProfiles;
  }
});
