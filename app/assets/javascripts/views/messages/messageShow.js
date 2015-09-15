OKCupid.Views.MessageShow = Backbone.CompositeView.extend({
  template: JST['messages/messageShow'],
  events: {},

  initialize: function(options) {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function() {
    var sender = OKCupid.Users.getOrFetch(this.model.get('sender_id'));
    var recipient = OKCupid.Users.getOrFetch(this.model.get('recipient_id'));
    var content = this.template({ message: this.model, sender: sender, recipient: recipient });
    this.$el.html(content);

    return this;
  }
});
