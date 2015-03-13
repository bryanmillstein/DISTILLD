DISTILLD.Collections.SearchResults = Backbone.Collection.extend({
  url: "api/search",

  model: function (attrs) {
    var type = attrs._type;
    delete attrs._type;

    return new DISTILLD.Models.User(attrs);
  },

  parse: function (response) {
    this._page = response._page;

    return response.results;
  }
})
