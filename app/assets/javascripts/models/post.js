DISTILLD.Models.Post = Backbone.Model.extend ({
  urlRoot: 'api/posts',

  comments: function () {
    if (!this._comments) {
      this._comments = new DISTILLD.Collections.Comments( [], { post: this });
    }

    return this._comments;
  },

  parse: function (response) {
    if (response.comments) {
      this.comments().set(response.comments);
      delete response.comments;
    }

    return response;
  }

});
