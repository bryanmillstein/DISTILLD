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

      if (response.is_current_user) {
        this.set({ is_current_user: "true" })
        delete response.is_current_user
      } else {
        this.set({ is_current_user: null })
        delete response.is_current_user
      }

      if (response.is_friend) {
        this.set({ is_friend: "true" })
        delete response.is_friend
      } else {
        this.set({ is_friend: null })
        delete response.is_friend
      }

      return response;
    }
});
