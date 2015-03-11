DISTILLD.Collections.Posts = Backbone.Collection.extend ({
  url: 'api/posts',
  model: DISTILLD.Models.Post,

  initialize: function (models, options) {
    this.user = options.user
  }

});
