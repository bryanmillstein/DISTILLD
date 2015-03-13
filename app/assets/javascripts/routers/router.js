DISTILLD.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "": "feed",
    "users/:id": "userShow",
    "search": "search"

  },

  feed: function () {
    DISTILLD.Collections.users.fetch();
    var friendsPosts = new DISTILLD.Collections.Posts();
    friendsPosts.fetch();

    var feedView = new DISTILLD.Views.PostsIndex({ collection: friendsPosts, users: DISTILLD.Collections.users });

    this._swapView(feedView);
  },

  userShow: function (id) {
    DISTILLD.Collections.users.fetch();
    var user = DISTILLD.Collections.users.getOrFetch(id),
        view = new DISTILLD.Views.UserShow({ model: user, collection: DISTILLD.Collections.users });

    this._swapView(view);
  },

  search: function () {
    DISTILLD.Collections.users.fetch();
    
    var searchView = new DISTILLD.Views.Search();
    this._swapView(searchView);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
