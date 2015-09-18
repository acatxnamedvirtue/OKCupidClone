OKCupid.Models.QuestionChoice = Backbone.Model.extend({
  urlRoot: '/api/question_choices',

  toJSON: function() {
    return {question_choice: _.clone(this.attributes)};
  },
});
