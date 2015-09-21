OKCupid.Views.UsersForm = Backbone.View.extend({
  initialize: function(options) {
    this.listen
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
    var userData = $form.serializeJSON().user;
    var that = this;

    this.model.set(userData);
    this.model.save({}, {
      success: function() {
        OKCupid.CurrentUser.fetch();
        that.collection.add(that.model, { merge: true});
        Backbone.history.navigate('', { trigger: true });
      },
      error: function(data) {

      }
    });
  }
});
