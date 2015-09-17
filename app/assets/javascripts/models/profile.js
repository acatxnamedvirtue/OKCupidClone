OKCupid.Models.Profile = Backbone.Model.extend({
  urlRoot: '/api/profiles',

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
    OKCupid.CurrentUser.likes().each(function(like) {
      if(that.id === like.get('profile_id')) {
        liked = true;
      }
    });

    return liked;
  },

  user: function() {
    this._user = this._user || {};
    return this._user;
  },
});
