DISTILLD.Models.User = Backbone.Model.extend ({
    urlRoot: 'api/users',

    posts: function () {
      if (!this._posts) {
        this._posts = new DISTILLD.Collections.Posts( [],{ user: this });
      }

      return this._posts;
    },

    friends: function () {
      if (!this._friends) {
        this._friends = new DISTILLD.Collections.Friends( [],{ user: this });
      }

      return this._friends;
    },

    friendships: function () {
      if (!this._friendships) {
        this._friendships = new DISTILLD.Collections.Friendships( [],{ user: this });
      }

      return this._friendships;
    },

    parse: function (response) {
      if (response.posts) {
        this.posts().set(response.posts);
        delete response.posts;
      }

      if (response.friends) {
        this.friends().set(response.friends);
        delete response.friends;
      }

      if (response.friendships) {
        this.friendships().set(response.friendships);
        delete response.friendships;
      }

      return response;
    }
});
