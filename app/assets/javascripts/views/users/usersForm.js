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

    
  }
});
