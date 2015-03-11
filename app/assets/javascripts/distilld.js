window.DISTILLD = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Utils: {},
  initialize: function() {
    DISTILLD.users = new DISTILLD.Collections.Users();
    new DISTILLD.Routers.Router({ $rootEl: $('#main') });
    Backbone.history.start();

  }
};

$(document).ready(function(){
  DISTILLD.initialize();
});
