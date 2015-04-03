DISTILLD.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "": "feed",
    "users/:id": "userShow",
    "search": "search",
    "users/:id/friends": 'friends',
    "users/:id/whiskys": 'whiskys',
    "users/:id/settings": 'settings',
    "places/:id": 'place',
    "whisky/:id": 'whisky',

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

  place: function (id) {
    var placePosts = new DISTILLD.Collections.Places();
    var placesView = new DISTILLD.Views.PlacesShow({ place_id: id, collection: placePosts });

    this._swapView(placesView);
  },

  whisky: function (id) {
    var whisky = DISTILLD.Collections.whiskys.getOrFetch(id);
    var whiskyPosts = whisky.posts();

    var whiskyView = new DISTILLD.Views.WhiskyShow({ model: whisky, collection: whiskyPosts });

    this._swapView(whiskyView);
  },

  whiskys: function (id) {
    var user = DISTILLD.Collections.users.getOrFetch(id);
    var whiskys = user.whiskys();
    var suggestions = user.suggestions();

    var whiskysView = new DISTILLD.Views.WhiskyIndex({ model: user, collection: whiskys, suggestions: suggestions });


    this._swapView(whiskysView);
  },

  friends: function (id) {
    var user = DISTILLD.Collections.users.getOrFetch(id);
    var friends = user.friends();
    var friendsView = new DISTILLD.Views.FriendsIndex({ model: user, collection: friends });


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
