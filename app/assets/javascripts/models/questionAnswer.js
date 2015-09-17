OKCupid.Models.QuestionAnswer = Backbone.Model.extend({
  urlRoot: '/api/question_answers',

  toJSON: function() {
    return {question_answer _.clone(this.attributes)};
  },
});
