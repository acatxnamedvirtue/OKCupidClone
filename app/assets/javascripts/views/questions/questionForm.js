OKCupid.Views.QuestionForm = Backbone.CompositeView.extend({
  tagName: 'form',
  template: JST['questions/questionForm'],
  events: {
    'submit' : 'submit'
  },

  initialize: function() {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function() {
    var content = this.template({ question: this.model });
    this.$el.html(content);

    return this;
  },

  submit: function(e) {
    e.preventDefault();
    var attrs = this.$el.serializeJSON();
    var that = this;

    var success = function() {
      this.collection.add(this.model);
      Backbone.history.navigate('#/questions/' + that.model.id, {trigger: true});
    }.bind(this);

    var errors = function(model, response) {
      $('.errors').empty();
      response.responseJSON.forEach(function (el) {
        var $li = $('<li></li>');
        $li.text(el);
        $('.errors').append($li);
      }.bind(this));
    }

    this.model.save(attrs.question, {
      wait: true,
      success: success,
      errors: errors.bind(this)
    });
  }
});
