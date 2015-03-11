DISTILLD.Models.User = Backbone.Model.extend ({
    urlRoot: 'api/users',

    posts: function () {
      if (!this._posts) {
        this._posts = DISTILLD.Collections.Posts( [],{ user: this });
      }

      return this._posts;
    },

    parse: function (response) {
      if (response.posts) {
        this.posts().set(response.posts);
        delete response.posts;
      }
      return response;
    }
});
