window.DISTILLD = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Utils: {},
  initialize: function(options) {
    new DISTILLD.Routers.Router({ $rootEl: $('#main') });
    Backbone.history.start();

  }
};
