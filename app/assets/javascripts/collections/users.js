OKCupid.Collections.Users = Backbone.Collection.extend({
  model: OKCupid.Models.User,
  url: 'users/',

  getOrFetch: function(id) {
    var user = this.get(id);
    var that = this;

    if(!user) {
      user = new OKCupid.Models.Profile({id: id});
      that.add(user);
      user.fetch({
        error: function() { that.remove(user); }
      });
    } else {
      user.fetch();
    }

    return user;
  }
})