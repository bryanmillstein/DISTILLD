DISTILLD.Models.User = Backbone.Model.extend ({
    urlRoot: 'api/users',

    posts: function () {
      if (!this._posts) {
        this._posts = new DISTILLD.Collections.Posts( [],{ user: this });
      }

      return this._posts;
    },

    // comments: function () {
    //   if (!this._comments) {
    //     this._comments = new DISTILLD.Collections.Comments( [], { post: this });
    //   }
    //
    //   return this._comments;
    // },

    friends: function () {
      if (!this._friends) {
        this._friends = new DISTILLD.Collections.Friends( [],{ user: this });
      }

      return this._friends;
    },

    parse: function (response) {
      if (response.posts) {
        this.posts().set(response.posts, { parse: true });
        delete response.posts;
      }

      // if (response.comments) {
      //   this.comments().set(response.comments);
      //   delete response.comments;
      // }

      if (response.friends) {
        this.friends().set(response.friends);
        delete response.friends;
      }

      if (response.is_current_user) {
        this.set({ is_current_user: "true" });
        delete response.is_current_user;
      } else {
        this.set({ is_current_user: null });
        delete response.is_current_user;
      }

      if (response.is_friend) {
        this.set({ is_friend: "true" });
        delete response.is_friend;
      } else {
        this.set({ is_friend: null });
        delete response.is_friend;
      }

      return response;
    }
});
