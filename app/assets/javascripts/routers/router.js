DISTILLD.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    DISTILLD.Collections.users.fetch();
  },

  routes: {
    "": "index",
    "users/:id": "userShow",

  },

  index: function () {
    // var indexView = new DISTILLD.Views.UsersIndex({ model: this.model });
    // this._swapView(indexView);
    this.$rootEl.html("HOME");
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
