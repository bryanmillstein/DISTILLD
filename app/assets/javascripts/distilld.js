window.DISTILLD = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Utils: {},
  initialize: function(options) {
    currentUser = new DISTILLD.Models.User({ id: options.currentUserId })
    new DISTILLD.Routers.Router({ $rootEl: $('#main'), model: currentUser });
    Backbone.history.start();

  }
};
