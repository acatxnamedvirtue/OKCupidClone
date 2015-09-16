OKCupid.Collections.Likes = Backbone.Collection.extend({
  url: '/api/likes',
  model: OKCupid.Models.Like,

  getOrFetch: function(id) {
    var like = this.get(id);
    var that = this;

    if(!like) {
      like = new OKCupid.Models.Like({id: id});
      that.add(like);
      like.fetch({
        error: function() { that.remove(like); }
      });
    } else {
      like.fetch();
    }

    return like;
  }
})
