DISTILLD.Collections.Friends = Backbone.Collection.extend({
  url: 'api/friends',
  model: DISTILLD.Models.Friends,

  initialize: function (models, options) {
    this.user = options.user
  }

});
