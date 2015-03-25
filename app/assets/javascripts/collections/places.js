DISTILLD.Collections.Places = Backbone.Collection.extend ({
  url: 'api/places',
  model: DISTILLD.Models.Place,
  comparator: function (place) {
    return -Date.parse(place.get('created_at'));
  }

});
