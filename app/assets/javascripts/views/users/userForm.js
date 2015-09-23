OKCupid.Views.UserForm = Backbone.View.extend({
  initialize: function(options) {
    this.listenTo(OKCupid.CurrentUser, 'sync', this.render);
  },

  template: JST['users/form'],

  events: {
    'submit form' : 'submit'
  },

  render: function() {
    var content = this.template({ user: this.model });
    this.$el.html(content);

    return this;
  },

  submit: function(e) {
    e.preventDefault();
    var $form = $(e.currentTarget);
    var attrs = $form.serializeJSON();

    var that = this;
    var model = OKCupid.Users.getOrFetch(OKCupid.CurrentUser.id);
    model.set(attrs.user);
    model.save({}, {
      success: function() {
        OKCupid.CurrentUser.fetch();
        OKCupid.Users.add(that.model, { merge: true});
        Backbone.history.navigate('', { trigger: true });
      },
      error: function(data) {
        alert("invalid something something!");
      }
    });
  }
});
