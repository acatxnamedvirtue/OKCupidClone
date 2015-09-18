OKCupid.Views.QuestionShow = Backbone.CompositeView.extend({
  tagName: 'form',
  template: JST['questions/questionShow'],
  events: {
    'submit' : 'submit'
  },

  initialize: function(options) {
    this.listenTo(this.model, 'sync', this.render);
    // this.listenTo(this.model.questionChoices(), 'add change remove reset', this.render)
  },

  render: function() {
    var content = this.template({ question: this.model });
    this.$el.html(content);
    this.model.questionChoices().each(function(choice) {
      var html = $("<input type='radio' name='question_answer[question_choice_id]' value='" +
        choice.id + "'>" + choice.get('body') + '</input><br>');
      this.$('.choices').append(html);
    });

    return this;
  },

  submit: function(e) {
    e.preventDefault();
    var attrs = this.$el.serializeJSON();
    attrs.question_answer.question_id = this.model.id;
    attrs.question_answer.user_id = OKCupid.CurrentUser.id
    var that = this;

    debugger

    var success = function() {
      OKCupid.CurrentUser.answeredQuestions().add(this.model);
      Backbone.history.navigate('#/questions/', {trigger: true});
    }.bind(this);

    var errors = function(model, response) {
      $('.errors').empty();
      response.responseJSON.forEach(function (el) {
        var $li = $('<li></li>');
        $li.text(el);
        $('.errors').append($li);
      }.bind(this));
    }

    var questionAnswer = new OKCupid.Models.QuestionAnswer();
    questionAnswer.save(attrs.question_answer, {
      wait: true,
      success: success,
      errors: errors.bind(this)
    });
  }
});
