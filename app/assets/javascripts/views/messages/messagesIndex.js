OKCupid.Views.MessagesIndex = Backbone.CompositeView.extend({
  template: JST['messages/messagesIndex'],

  initialize: function() {
    this.listenTo(this.collection, 'add change remove reset', this.render);
    this.listenTo(OKCupid.Users, 'add change remove reset', this.render);
  },

  render: function() {
    var messagesReceived = this.collection.where({ recipient_id: OKCupid.CurrentUser.id });
    var messagesSent = this.collection.where({ sender_id: OKCupid.CurrentUser.id});
    var content = this.template({ messages: this.collection });
    this.$el.html(content);

    messagesReceived.forEach(function(message) {
      var indexItem = new OKCupid.Views.MessagesIndexItem({ model: message });
      this.$('ul.received-messages').append(indexItem.render().$el);
    }.bind(this));

    messagesSent.forEach(function(message) {
      var indexItem = new OKCupid.Views.MessagesIndexItem({ model: message });
      this.$('ul.sent-messages').append(indexItem.render().$el);
    }.bind(this));

    return this;
  }
});
