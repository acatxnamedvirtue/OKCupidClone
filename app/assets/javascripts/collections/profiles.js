OKCupid.Collections.Profiles = Backbone.Collection.extend({
  model: OKCupid.Models.Profile,
  url: '/api/profiles/',

  getOrFetch: function(id) {
    var profile = this.get(id);
    var that = this;

    if(!profile) {
      profile = new OKCupid.Models.Profile({id: id});
      that.add(profile);
      profile.fetch({
        error: function() { that.remove(profile); }
      });
    } else {
      profile.fetch();
    }

    return profile;
  }
})
