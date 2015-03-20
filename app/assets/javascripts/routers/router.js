DISTILLD.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "": "feed",
    "users/:id": "userShow",
    "search": "search",
    "users/:id/friends": 'friends',
    "users/:id/settings": 'settings'
  },

  feed: function () {
    var friendsPosts = new DISTILLD.Collections.Posts();
    friendsPosts.fetch();

    var feedView = new DISTILLD.Views.PostsIndex({ collection: friendsPosts, });

    this._swapView(feedView);
  },

  userShow: function (id) {
    var user = DISTILLD.Collections.users.getOrFetch(id),
        view = new DISTILLD.Views.UserShow({ model: user, collection: DISTILLD.Collections.users });

    this._swapView(view);
  },

  friends: function () {
    var friends = new DISTILLD.Collections.Friends();
    friends.fetch();
    var friendsView = new DISTILLD.Views.FriendsIndex({ collection: friends });

    this._swapView(friendsView);
  },

  settings: function (id) {
    var user = DISTILLD.Collections.users.getOrFetch(id),
        view = new DISTILLD.Views.UserSettings({ model: user });

    this._swapView(view);
  },

  search: function () {
    var searchView = new DISTILLD.Views.Search({});
    this._swapView(searchView);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
