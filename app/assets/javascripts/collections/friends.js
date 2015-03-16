DISTILLD.Collections.Friends = Backbone.Collection.extend({
  url: 'api/friends',
  model: DISTILLD.Models.Friend,

  parse: function (response) {
    console.log(response);
    return response;
  }

});

DISTILLD.Collections.friends = new DISTILLD.Collections.Friends();
