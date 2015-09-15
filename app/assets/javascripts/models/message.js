OKCupid.Models.Message = Backbone.Model.extend({
  urlRoot: 'api/messages/',

  toJSON: function() {
    return {message: _.clone(this.attributes)};
  }
});
