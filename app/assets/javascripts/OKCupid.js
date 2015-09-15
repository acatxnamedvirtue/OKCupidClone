window.OKCupid = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var profiles = new OKCupid.Collections.Profiles();
    OKCupid.Users = new OKCupid.Collections.Users();
    OKCupid.Users.fetch({ reset: true })
    profiles.fetch({ reset: true });

    this.router = new OKCupid.Routers.Router({
      collection: profiles,
      $rootEl: $('#content')
    });

    Backbone.history.start();
  }
};

$(document).ready(function(){
  OKCupid.initialize();
});
