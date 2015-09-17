OKCupid.Collections.QuestionAnswers = Backbone.Collection.extend({
  url: '/api/question_answers',
  model: OKCupid.Models.QuestionAnswer,

  getOrFetch: function(id) {
    var questionAnswer = this.get(id);
    var that = this;

    if(!questionAnswer) {
      questionAnswer = new OKCupid.Models.QuestionAnswer({id: id});
      that.add(questionAnswer);
      questionAnswer.fetch({
        error: function() { that.remove(questionAnswer); }
      });
    } else {
      questionAnswer.fetch();
    }

    return questionAnswer;
  }
})
