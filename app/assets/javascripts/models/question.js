OKCupid.Models.Question = Backbone.Model.extend({
  urlRoot: '/api/questions',

  toJSON: function() {
    return {question: _.clone(this.attributes)};
  },

  alreadyAnswered: function() {
    var answered = false;
    OKCupid.CurrentUser.answeredQuestions().each(function(question) {
      if(question.id === this.id) {
        answered = true;
      }
    }.bind(this));

    return answered;
  },

  parse: function(response) {
    if(response.question_choices) {
      this.questionChoices().set(response.question_choices);
      delete response.question_choices;
    }

    if(response.question_answers) {
      this.questionAnswers().set(response.question_answers);
      delete response.question_answers;
    }

    if(response.author) {
      this._author = response.author
      delete response.author;
    }

    return response;
  },

  author: function() {
    this._author = this._author || {}
    return this._author
  },

  questionChoices: function() {
    this._questionChoices = this._questionChoices || new OKCupid.Collections.QuestionChoices();
    return this._questionChoices;
  },

  questionAnswers: function() {
    this._questionAnswers = this._questionAnswers || new OKCupid.Collections.QuestionAnswers();
    return this._questionAnswers;
  }
});
