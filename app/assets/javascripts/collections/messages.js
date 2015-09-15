OKCupid.Collections.Messages = Backbone.Collection.extend({
  model: OKCupid.Models.Message,
  url: 'api/messages/',

  getOrFetch: function(id) {
    var message = this.get(id);
    var that = this;

    if(!message) {
      message = new OKCupid.Models.Message({id: id});
      that.add(message);
      message.fetch({
        error: function() { that.remove(message); }
      });
    } else {
      message.fetch();
    }

    return message;
  }
})
