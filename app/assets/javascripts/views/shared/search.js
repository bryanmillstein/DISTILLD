DISTILLD.Views.Search = Backbone.CompositeView.extend({

  initialize: function () {
    this.searchResults = new DISTILLD.Collections.SearchResults();
    this.listenTo(this.searchResults, "sync", this.render);
  },

  events: {
    "click .search": "search",
  },

  template: JST["shared/search"],

  render: function () {
    var content = this.template({ collection: this.searchResults });
    this.$el.html(content);

    this.renderSearchResults();

    return this;
  },

  renderSearchResults: function () {
    var container = this.$(".search-results");

    this.searchResults.each(function (model) {
      var template = JST["users/list_item"];

      container.append(template({ model: model }));
    });
  },

  search: function (event) {

    event.preventDefault();
    this.searchResults._query = this.$(".query").val();
    this.searchResults.fetch({
      data: {query: this.searchResults._query}
    });
  }

});
