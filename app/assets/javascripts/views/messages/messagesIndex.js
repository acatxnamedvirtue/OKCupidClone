OKCupid.Views.MessagesIndex = Backbone.CompositeView.extend({
  template: JST['messages/messagesIndex'],

  initialize: function() {
    this.listenTo(this.collection, 'add change remove reset', this.render);
    this.listenTo(OKCupid.Users, 'add change remove reset', this.render);
  },

  render: function() {
    var content = this.template({ messages: this.collection });
    this.$el.html(content);

    this.collection.each(function(message) {
      var indexItem = new OKCupid.Views.MessagesIndexItem({ model: message });
      this.$('ul.messages').append(indexItem.render().$el);
    }.bind(this));

    return this;
  }
});
