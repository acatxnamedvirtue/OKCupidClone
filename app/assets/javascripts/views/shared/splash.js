OKCupid.Views.SplashPage = Backbone.View.extend({
  template: JST['shared/splash'],

  initialize: function(options) {
    this.listenTo(OKCupid.CurrentUser, 'signIn', this.signInCallback);
  },

  events: {
    'click .sign-up-continue' : 'continueSignUp',
    'submit .sign-up-more-info-form' : 'signUp',
    'submit .sign-in-form' : 'signIn'
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);

    return this;
  },

  continueSignUp: function(e) {
    e.preventDefault();

    this.$el.find('.sign-in p').css({"display": "none"});

    var attrs = this.$el.find('form.sign-up').serializeJSON();
    this._sexOrientation = attrs.user.sex_orientation;
    this._gender = attrs.user.gender;
    Backbone.history.navigate('#continue', {trigger: true});

    var content = JST['shared/signUp']();
    this.$el.find('nav.sign-up-more-info').html(content);
  },

  signIn: function(e) {
    e.preventDefault();
    var $form = $(e.currentTarget);
    var formData = $form.serializeJSON().user;

    OKCupid.CurrentUser.signIn({
      usernameOrEmail: formData.username_or_email,
      password: formData.password,
      error: function() {
        alert("Wrong username/email and/or password. Please try again.");
      }
    });
  },

  signInCallback: function(e) {
    if(this.callback) {
      this.callback();
    } else {
      Backbone.history.navigate('', { trigger: true });
    }
  },

  signUp: function(e) {
    e.preventDefault();
    var $form = $(e.currentTarget);
    var attrs = $form.serializeJSON();
    delete attrs.user.confirmEmail;
    attrs.user.sex_orientation = this._sexOrientation;
    attrs.user.gender = this._gender;

    var that = this;
    var model = new OKCupid.Models.User();
    model.set(attrs.user);
    model.save({}, {
      success: function() {
        OKCupid.CurrentUser.fetch();
        OKCupid.Users.add(that.model, { merge: true});
        Backbone.history.navigate('', { trigger: true });
      },
      error: function(data) {

      }
    });
  }
});
