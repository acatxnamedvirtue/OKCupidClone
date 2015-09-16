OKCupid.Models.Profile = Backbone.Model.extend({
  urlRoot: 'api/profiles/',

  parse: function(response) {
    if(response.user) {
      this._user = response.user;
      delete response.user;
    }

    return response;
  },

  toJSON: function() {
    return {profile: _.clone(this.attributes)};
  },

  alreadyLiked: function() {
    var liked = false;
    var that = this;
    OKCupid.CurrentUser.likedProfiles().forEach(function(profile) {
      if(profile.id === that.id) {
        liked = true;
      }
    });

    return liked;
  },

  user: function() {
    this._user = this._user || {};
    return this._user;
  },

  // likes: function() {
  //   return OKCupid.Likes.where({ profile_id: this.id })
  // },
  //
  // likers: function() {
  //   var likes = this.likes();
  //
  //   var likers = [];
  //
  //   likes.forEach(function(like) {
  //     var user = OKCupid.Users.findWhere({ id: like.get('liker_id')})
  //     likers.push(user);
  //   });
  //
  //   return likers;
  // }
});
