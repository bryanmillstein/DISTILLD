DISTILLD.Collections.Friendships = Backbone.Collection.extend({
  url: 'api/friendships',
  model: DISTILLD.Models.Friendship,

  initialize: function (models, options) {
    this.user = options.user
  }

});
