DISTILLD.Models.Whisky = Backbone.Model.extend ({
  urlRoot: 'api/whisky',

  posts: function () {
    if (!this._posts) {
      this._posts = new DISTILLD.Collections.Posts( [],{ user: this });
    }

    return this._posts;
  },


  parse: function (response) {
    if (response.posts) {
      this.posts().set(response.posts, { parse: true });
      delete response.posts;
    }

    return response;
  }

});
