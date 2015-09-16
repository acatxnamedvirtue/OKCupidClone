OKCupid.Models.Profile = Backbone.Model.extend({
  urlRoot: 'api/profiles/',

  toJSON: function() {
    return {profile: _.clone(this.attributes)};
  }
});
