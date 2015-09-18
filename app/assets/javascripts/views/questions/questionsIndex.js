OKCupid.Views.QuestionsIndex = Backbone.CompositeView.extend({
  template: JST['questions/questionsIndex'],

  initialize: function(options) {
    this.listenTo(OKCupid.Questions, 'add change reset remove', this.render)
    this.listenTo(OKCupid.CurrentUser.answeredQuestions(), 'add change reset remove', this.render)
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);

    OKCupid.Questions.each(function(question) {
      if(question.alreadyAnswered()){ return; }
      var indexItem = new OKCupid.Views.QuestionsIndexItem({ model: question });
      this.$('ul.questions').append(indexItem.render().$el);
    }.bind(this));

    return this;
  }
});
