DISTILLD.Views.Search = Backbone.CompositeView.extend({

  initialize: function () {
    this.searchResults = new DISTILLD.Collections.SearchResults();
    this.searchResults.pageNum = 1;
    this.pageDisplay = null;
    this.listenTo(this.searchResults, "sync", this.render);
  },

  events: {
    "click .search-button": "search",
    "click .next-page": "nextPage",
    "click .prev-page": "prevPage"

  },

  template: JST["shared/search"],

  render: function () {
    var content = this.template({ results: this.searchResults, display: this.pageDisplay });
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
    this.pageDisplay = true;

    this.searchResults.pageNum = 1;
    this.searchResults.query = this.$(".query").val();
    this.searchResults.fetch({
      data: {
              query: this.searchResults.query,
              page: 1
            }
    });
  },

  nextPage: function (event) {
      this.searchResults.fetch({
        data: {
          query: this.searchResults.query,
          page: this.searchResults.pageNum + 1
        },
        success: function () {
          this.searchResults.pageNum = this.searchResults.pageNum + 1;
        }.bind(this)
    });
  },

  prevPage: function (event) {
    if (this.searchResults.pageNum > 1) {
        this.searchResults.fetch({
          data: {
            query: this.searchResults.query,
            page: this.searchResults.pageNum - 1
          },
          success: function () {
            this.searchResults.pageNum = this.searchResults.pageNum - 1;
          }.bind(this)
      });
    }
  }

});
