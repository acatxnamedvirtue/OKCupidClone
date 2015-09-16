OKCupid.Views.LikesIndexItem = Backbone.CompositeView.extend({
  template: JST['likes/likesIndexItem'],

  initialize: function() {
    this.listenTo(this.collection, 'add change remove reset', this.render);
  },

  render: function() {
    var content = this.template({ user: this.model });
    this.$el.html(content);

    return this;
  }
});
