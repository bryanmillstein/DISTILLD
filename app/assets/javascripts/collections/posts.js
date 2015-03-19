DISTILLD.Collections.Posts = Backbone.Collection.extend ({
  url: 'api/posts',
  model: DISTILLD.Models.Post,
  comparator: function (post) {
    return -Date.parse(post.get('created_at'));
  }

});

DISTILLD.Collections.posts = new DISTILLD.Collections.Posts();
