OKCupid.Views.LikesIndexItem = Backbone.CompositeView.extend({
  template: JST['likes/likesIndexItem'],
  tagName: "li",

  render: function() {
    var content = this.template({ user: this.model });
    this.$el.html(content);

    return this;
  }
});
