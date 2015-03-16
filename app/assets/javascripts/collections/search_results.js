DISTILLD.Collections.SearchResults = Backbone.Collection.extend({
  url: "api/search",

  model: function (attrs) {
    var type = attrs._type;
    delete attrs._type;

    return new DISTILLD.Models.User(attrs);
  },

  friends: function () {
    if (!this._friends) {
      this._friends = new DISTILLD.Collections.Friends( [],{});
    }

    return this._friends;
  },

  parse: function (response) {
    this._page = response._page;

    if (response.friends) {
      this.friends().set(response.friends);
      delete response.friends;
    }

    return response.results;
  }
});
