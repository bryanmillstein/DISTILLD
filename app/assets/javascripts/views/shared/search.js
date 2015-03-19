DISTILLD.Views.Search = Backbone.CompositeView.extend({

  initialize: function () {
    this.searchResults = new DISTILLD.Collections.SearchResults();
    this.listenTo(this.searchResults, "sync", this.render);
  },

  events: {
    "click .search-button": "search",
  },

  template: JST["shared/search"],

  render: function () {
    var content = this.template({ collection: this.searchResults });
    this.$el.html(content);

    this.renderSearchResults();
    return this;
  },

  renderSearchResults: function () {
    var container = this.$(".search-results"),
        that = this;
    this.searchResults.each(function (model) {
      var view = new DISTILLD.Views.FriendShow({ model: model, collection: that.searchResults });
      that.addSubview('.search-results', view);
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
