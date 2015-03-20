DISTILLD.Collections.Whiskys = Backbone.Collection.extend ({
  url: 'api/whisky',
  model: DISTILLD.Models.Whisky,
  comparator: function (whisky) {
    return -Date.parse(whisky.get('created_at'));
  }

});
