DISTILLD.Collections.Comments = Backbone.Collection.extend ({
  url: 'api/comments',
  model: DISTILLD.Models.Comment,

  // initialize: function (models, options) {
  //   this.post = options.post
  // }

});

DISTILLD.Collections.posts = new DISTILLD.Collections.Comments();
