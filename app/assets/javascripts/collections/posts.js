DISTILLD.Collections.Posts = Backbone.Collection.extend ({
  url: 'api/posts',
  model: DISTILLD.Models.Post,

});

DISTILLD.Collections.posts = new DISTILLD.Collections.Posts();
