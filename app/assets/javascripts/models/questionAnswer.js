OKCupid.Models.QuestionAnswer = Backbone.Model.extend({
  urlRoot: '/api/question_answers',

  toJSON: function() {
    return {question _.clone(this.attributes)};
  },
});
