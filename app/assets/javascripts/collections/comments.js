DISTILLD.Collections.Comments = Backbone.Collection.extend ({
  url: 'api/comments',
  model: DISTILLD.Models.Comment,
  comparator: function (comment) {
    return -Date.parse(comment.get('created_at'));
  }

});

DISTILLD.Collections.posts = new DISTILLD.Collections.Comments();
