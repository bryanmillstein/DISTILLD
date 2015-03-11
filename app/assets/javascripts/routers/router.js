DISTILLD.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    DISTILLD.users.fetch();
  },

  routes: {
    "": "index",
    "users/:id": "userShow",
    
  },

  index: function () {
    var view = new DISTILLD.Views.UsersIndex({ collection: DISTILLD.users });
    this._swapView(view);

  },

  userShow: function (id) {
    var user = DISTILLD.users.getOrFetch(id),
        view = new DISTILLD.Views.UserShow({ collection: DISTILLD.users, model: user });

    this._swapView(view);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
