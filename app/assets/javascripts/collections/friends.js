DISTILLD.Collections.Friends = Backbone.Collection.extend({
  url: 'api/friends',
  model: DISTILLD.Models.Friend

});

DISTILLD.Collections.friends = new DISTILLD.Collections.Friends();
