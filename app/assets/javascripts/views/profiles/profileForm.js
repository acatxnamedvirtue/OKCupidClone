this.OKCupid.Views.ProfileForm = Backbone.CompositeView.extend({
  tagName: 'form',
  template: JST['profiles/profileForm'],
  events: {
    'submit' : 'submit'
  },

  initialize: function() {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function() {
    var user = OKCupid.Users.getOrFetch(this.model.get('user_id'));
    var content = this.template({ profile: this.model, user: user });
    this.$el.html(content);

    return this;
  },

  submit: function(e) {
    e.preventDefault();
    var attrs = this.$el.serializeJSON();
    var that = this;

    var success = function() {
      this.collection.add(this.model);
      Backbone.history.navigate('#/profiles/' + that.model.id, {trigger: true});
    }.bind(this);

    var errors = function(model, response) {
      $('.errors').empty();
      response.responseJSON.forEach(function (el) {
        var $li = $('<li></li>');
        $li.text(el);
        $('.errors').append($li);
      }.bind(this));
    }

    this.model.save(attrs.profile, {
      wait: true,
      success: success,
      errors: errors.bind(this)
    });
  }
});
