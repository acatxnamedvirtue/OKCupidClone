OKCupid.Views.SignIn = Backbone.View.extend({
  initialize: function(options) {
    this.callback = options.callback;
    this.listenTo(OKCupid.CurrentUser, 'signIn', this.signInCallback);
  },

  events: {
    'submit form': 'submit',
  },

  template: JST['shared/signIn'],

  render: function() {
    var content = this.template();
    this.$el.html(content);

    return this;
  },

  submit: function(e) {
    e.preventDefault();
    var $form = $(e.currentTarget);
    var formData = $form.serializeJSON().user;
debugger
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
  }
});
