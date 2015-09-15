window.OKCupid = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    OKCupid.Profiles = new OKCupid.Collections.Profiles();
    OKCupid.Profiles.fetch({ reset: true });

    OKCupid.Users = new OKCupid.Collections.Users();
    OKCupid.Users.fetch({ reset: true });

    OKCupid.Messages = new OKCupid.Collections.Messages();
    OKCupid.Messages.fetch({ reset: true });

    this.router = new OKCupid.Routers.Router({ $rootEl: $('#content') });

    Backbone.history.start();
  }
};

$(document).ready(function(){
  OKCupid.initialize();
});
