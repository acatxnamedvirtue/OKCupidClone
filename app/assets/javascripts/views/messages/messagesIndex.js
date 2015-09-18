OKCupid.Views.MessagesIndex = Backbone.CompositeView.extend({
  template: JST['messages/messagesIndex'],

  initialize: function(options) {
    this.sentMessages = options.sentMessages;
    this.receivedMessages = options.receivedMessages;
    this.listenTo(this.sentMessages, 'add change remove reset', this.render);
    this.listenTo(this.receivedMessages, 'add change remove reset', this.render);
    this.listenTo(OKCupid.CurrentUser, 'sync', this.render);
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);

    this.receivedMessages.each(function(message) {
      var sender = message.sender();
      var indexItem = new OKCupid.Views.MessagesIndexItem({
        sender: sender, model: message
      });
      this.$('ul.received-messages').append(indexItem.render().$el);
    }.bind(this));

    this.sentMessages.each(function(message) {
      var recipient = message.recipient();
      var indexItem = new OKCupid.Views.MessagesIndexItem({
        recipient: recipient, model: message
      });
      this.$('ul.sent-messages').append(indexItem.render().$el);
    }.bind(this));

    return this;
  }
});
