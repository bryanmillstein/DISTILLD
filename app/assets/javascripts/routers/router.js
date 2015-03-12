DISTILLD.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    DISTILLD.Collections.users.fetch();
  },

  routes: {
    "": "feed",
    "users/:id": "userShow",

  },

  feed: function () {
    this.model.fetch();
    friends = this.model.friends();
    var feedView = new DISTILLD.Views.FriendsPosts({ model: this.model, collection: friends });
    this._swapView(feedView);
  },

  userShow: function (id) {
    var user = DISTILLD.Collections.users.getOrFetch(id),
        view = new DISTILLD.Views.UserShow({ model: user, collection: DISTILLD.Collections.users });

    this._swapView(view);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
