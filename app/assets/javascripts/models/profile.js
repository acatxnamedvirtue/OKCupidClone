OKCupid.Models.Profile = Backbone.Model.extend({
  urlRoot: 'api/profiles/',

  // user: function() {
  //   this._user = this._user || new OKCupid.Models.User();
  //   return this._user;
  // },

  // parse: function(response) {
  //   debugger
  //   if(response.user) {
  //     this.user.set(response.user);
  //     delete response.user;
  //   }
  //
  //   return response;
  // },

  toJSON: function() {
    return {profile: _.clone(this.attributes)};
  }
})
