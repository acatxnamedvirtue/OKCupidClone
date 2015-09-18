window.OKCupid = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    OKCupid.Profiles = new OKCupid.Collections.Profiles();
    OKCupid.Profiles.fetch({ reset: true });

    OKCupid.Users = new OKCupid.Collections.Users();
    OKCupid.Questions = new OKCupid.Collections.Questions();
    OKCupid.Questions.fetch({ reset: true });

    OKCupid.CurrentUser = OKCupid.Users.getOrFetch($('#current_user_id').data('id'));

    this.router = new OKCupid.Routers.Router({ $rootEl: $('#content') });

    Backbone.history.start();
  }
};

$(document).ready(function(){
  OKCupid.initialize();
});
