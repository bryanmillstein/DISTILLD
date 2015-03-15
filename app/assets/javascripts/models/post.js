DISTILLD.Models.Post = Backbone.Model.extend ({
  urlRoot: 'api/posts',

  // comments: function () {
  //   if (!this.comments) {
  //     this.comments = new DISTILLD.Collections.Comments();
  //   }
  //
  //   return this.comments;
  // },
  //
  // parse: function (response) {
  //   if (response.comments) {
  //     this.comments().set(response.comments);
  //     delete response.comments;
  //   }
  //
  //   return response;
  // }

});
