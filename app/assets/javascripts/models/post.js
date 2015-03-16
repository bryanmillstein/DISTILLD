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

    if (response.comments) {
      this.comments().set(response.comments);
      delete response.comments;
    }

    if (response.user_name) {
      this.set({ user_name: response.user_name })
      delete response.user_name
    }

    return response;
  }

});
