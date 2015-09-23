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

    OKCupid.MONTHS = {1:"January", 2:"February", 3:"March", 4:"April", 5:"May", 6:"June",
      7:"July", 8:"August", 9:"September", 10:"October", 11:"November", 12:"December"}

    OKCupid.MONTH = {"January":"01", "February":"02", "March":"03", "April":"04", "May":"05", "June":"06",
      "July":"07", "August":"08", "September":"09", "October":"10", "November":"11", "December":"12"};
    OKCupid.DAY = {"January":31, "February":28, "March":31, "April":30, "May":31, "June":30,
      "July":31, "August":31, "September":30, "October":31, "November":30, "December":31};

    this.header = new OKCupid.Views.Header({ el: "#header" });

    this.router = new OKCupid.Routers.Router({ $rootEl: $('#main') });

    Backbone.history.start();
  }
};
