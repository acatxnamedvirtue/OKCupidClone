OKCupid.Collections.QuestionChoices = Backbone.Collection.extend({
  url: '/api/question_choices',
  model: OKCupid.Models.QuestionChoice,

  getOrFetch: function(id) {
    var questionChoice = this.get(id);
    var that = this;

    if(!questionChoice) {
      questionChoice = new OKCupid.Models.QuestionChoice({id: id});
      that.add(questionChoice);
      questionChoice.fetch({
        error: function() { that.remove(questionChoice); }
      });
    } else {
      questionChoice.fetch();
    }

    return questionChoice;
  }
})
