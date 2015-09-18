OKCupid.Views.QuestionsIndexItem = Backbone.CompositeView.extend({
  tagName: 'li',
  template: JST['questions/questionsIndexItem'],

  initialize: function(options) {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function() {
    var content = this.template({ question: this.model });
    this.$el.html(content);

    return this;
  }
})
