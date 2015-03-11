window.DISTILLD = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Utils: {},
  initialize: function() {
    new DISTILLD.Routers.Router({ $rootEl: $('#main') });
    Backbone.history.start();

  }
};
