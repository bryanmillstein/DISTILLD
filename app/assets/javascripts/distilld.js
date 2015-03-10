window.DISTILLD = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    alert('Hello from Backbone!');
    new DISTILLD.Routers.Router({ $rootEl: $('#content') });


  }
};

$(document).ready(function(){
  DISTILLD.initialize();
});
