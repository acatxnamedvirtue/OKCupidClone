OKCupid.Collections.Questions = Backbone.Collection.extend({
  url: '/api/questions',
  model: OKCupid.Models.Question,

  getOrFetch: function(id) {
    var question = this.get(id);
    var that = this;

    if(!question) {
      question = new OKCupid.Models.Question({id: id});
      that.add(question);
      question.fetch({
        error: function() { that.remove(question); }
      });
    } else {
      question.fetch();
    }

    return question;
  }
})
