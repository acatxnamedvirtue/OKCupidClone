OKCupid.Models.Question = Backbone.Model.extend({
  urlRoot: '/api/questions',

  toJSON: function() {
    return {question _.clone(this.attributes)};
  },
});
