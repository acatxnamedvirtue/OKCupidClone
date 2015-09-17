OKCupid.Models.QuestionChoice = Backbone.Model.extend({
  urlRoot: '/api/question_choices',

  toJSON: function() {
    return {question _.clone(this.attributes)};
  },
});
