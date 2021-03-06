DISTILLD.Models.User = Backbone.Model.extend ({
    urlRoot: 'api/users',

    posts: function () {
      if (!this._posts) {
        this._posts = new DISTILLD.Collections.Posts( [],{ user: this });
      }

      return this._posts;
    },

    suggestions: function () {
      if (!this._suggestions) {
        this._suggestions = new DISTILLD.Collections.Suggestions( [],{ user: this });
      }

      return this._suggestions;
    },

    friends: function () {
      if (!this._friends) {
        this._friends = new DISTILLD.Collections.Friends( [],{ user: this });
      }

      return this._friends;
    },

    whiskys: function () {
      if (!this._whiskys) {
        this._whiskys = new DISTILLD.Collections.Whiskys( [],{ user: this });
      }

      return this._whiskys;
    },

    toJSON: function () {
      return {
        user: _.clone(this.attributes)
      };
    },

    parse: function (response) {
      if (response.posts) {
        this.posts().set(response.posts, { parse: true });
        delete response.posts;
      }

      if (response.suggestions) {
        this.suggestions().set(response.suggestions, { parse: true });
        delete response.suggestions;
      }

      if (response.whiskys) {
        this.whiskys().set(response.whiskys);
        delete response.whiskys;
      }

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
