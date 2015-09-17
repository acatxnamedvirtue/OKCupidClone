OKCupid.Views.MessageShow = Backbone.CompositeView.extend({
  template: JST['messages/messageShow'],

  initialize: function(options) {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function() {
    var sender = this.model.sender();
    var recipient = this.model.recipient();
    var content = this.template({ message: this.model, sender: sender, recipient: recipient });
    this.$el.html(content);

    return this;
  }
});
