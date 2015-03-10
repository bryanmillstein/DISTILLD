window.DISTILLD = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    alert('Hello from Backbone!');
    new DISTILLD.Routers.Router({ $rootEl: $('#content') });
    DISTILLD.user = new DISTILLD.Models.Users();
    Backbone.history.start();

  }
};

$(document).ready(function(){
  DISTILLD.initialize();
});
