window.DISTILLD = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    alert('Hello from Backbone!');
    DISTILLD.currentUserId = <%= current_user.try(:id) || "null" %>
    

  }
};

$(document).ready(function(){
  DISTILLD.initialize();
});
