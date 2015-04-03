DISTILLD.Views.Search = Backbone.CompositeView.extend({

  initialize: function () {
    this.searchResults = new DISTILLD.Collections.SearchResults();
    this.searchResults.pageNum = 1;
    this.pageDisplay = null;
    this.listenTo(this.searchResults, "sync", this.render);
  },

  events: {
    "click .search-button": "search",
    "keyup #search-input": "handleInput",
    "click .user-entry": "selectUser",
    "click .next-page": "nextPage",
    "click .prev-page": "prevPage",
  },

  template: JST["shared/search"],

  render: function () {
    var content = this.template({ results: this.searchResults, display: this.pageDisplay });
    this.$el.html(content);

    this.renderSearchResults();
    return this;
  },

  // renderSearch: function (event) {
  //   event.preventDefault();
  //   if (document.getElementById('search-input').value) {
  //     this.$(".search-button").trigger("click");
  //   }
  // },

  renderSearchResults: function () {
    var container = this.$(".search-results"),
        that = this;
    this.searchResults.each(function (model) {
      var view = new DISTILLD.Views.FriendShow({ model: model, fetch: that.searchResults });
      that.addSubview('.search-results', view);
    });
  },

  selectUser: function (event) {
    var choice = $(event.currentTarget);
    var content = choice.data('name')
    // this.model.set({ recipient_id: friendId });
    this.$('.users').empty();
    document.getElementById('search-input').value = content
    this.$('.search-button').trigger("click");

    /* Change class of submit button so it is toggled from hidden after user selects friend. */
  },

  handleInput: function () {
    var val = this.$('#search-input').val(),
        upcase = val.charAt(0).toUpperCase() + val.substring(1),
        lowercase = val.toLowerCase(),
        that = this;
    if (val.length > 1) {
      $.ajax({
        url: "api/users",
        dataType: "json",
        method: "GET",
        data: { query: val,
                upcase: upcase,
                lowercase: lowercase },
        success: this.renderUser.bind(this)
      });
    }
  },

  renderUser: function (users) {
    this.$('.users').empty();

    for (var i = 0; i < users.length; i++) {
      this.addUser(users[i]);
    }
  },

  addUser: function (user) {
    var view = new DISTILLD.Views.UserItem({ model: user });
    this.addSubview('.users', view);
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
    if (this.searchResults.count = 5) {
      this.searchResults.fetch({
        data: {
          query: this.searchResults.query,
          page: this.searchResults.pageNum + 1
        },
        success: function () {
          this.searchResults.pageNum = this.searchResults.pageNum + 1;
        }.bind(this)
      });
    }
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
