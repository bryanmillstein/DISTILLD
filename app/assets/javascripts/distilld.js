window.DISTILLD = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Utils: {},
  initialize: function(options) {
    // DISTILLD.currentUser = new DISTILLD.Models.User({ id: options.currentUserId })
    // new DISTILLD.Routers.Router({ $rootEl: $('#main'), model: DISTILLD.currentUser });
    new DISTILLD.Routers.Router({ $rootEl: $('#main') });

    Backbone.history.start();

  }
};
