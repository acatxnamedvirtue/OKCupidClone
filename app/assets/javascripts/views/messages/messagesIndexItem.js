OKCupid.Views.MessagesIndexItem = Backbone.CompositeView.extend({
  tagName: 'li',
  template: JST['messages/messagesIndexItem'],

  initialize: function(options) {
    this.listenTo(this.model, 'sync', this.render);
    this.sender = options.sender;
    this.recipient = options.recipient;
  },

  render: function() {
    var content = this.template({ message: this.model, sender: this.sender, recipient: this.recipient });
    this.$el.html(content);

    return this;
  }
})
