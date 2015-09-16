OKCupid.Models.Like = Backbone.Model.extend({
  urlRoot: 'api/likes',

  toJSON: function() {
    return {like: _.clone(this.attributes)};
  },

  liker: function() {
    return OKCupid.Users.findWhere({ id: this.get('liker_id') });
  },

  profile: function() {
    return OKCupid.Profiles.findWhere({ id: this.get('profile_id') });
  }
});
