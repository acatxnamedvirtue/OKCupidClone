OKCupid.Views.MessageShow = Backbone.CompositeView.extend({
  template: JST['messages/messageShow'],
  events: {},

  initialize: function(options) {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function() {
    if (this.model.sender()) {
    }

    var sender = this.model.sender().username;
    var recipient = this.model.recipient().username;
    var content = this.template({ message: this.model, sender: sender, recipient: recipient });
    this.$el.html(content);

    return this;
  }
});
