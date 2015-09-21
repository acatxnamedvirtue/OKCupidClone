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

    OKCupid.CurrentUser = new OKCupid.Models.CurrentUser();
    OKCupid.CurrentUser.fetch();

    this.header = new OKCupid.Views.Header({ el: "#header" });

    this.router = new OKCupid.Routers.Router({ $rootEl: $('#main') });

    Backbone.history.start();
  }
};
