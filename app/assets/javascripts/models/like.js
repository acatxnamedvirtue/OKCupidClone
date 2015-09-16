OKCupid.Models.Like = Backbone.Model.extend({
  urlRoot: 'api/likes',

  toJSON: function() {
    return {like: _.clone(this.attributes)};
  }
});
