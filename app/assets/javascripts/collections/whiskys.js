DISTILLD.Collections.Whiskys = Backbone.Collection.extend ({
  url: 'api/whisky',
  model: DISTILLD.Models.Whisky,
  comparator: function (whisky) {
    return -Date.parse(whisky.get('created_at'));
  },

  getOrFetch: function (id) {
    var model = this.get(id),
        that = this;

    if (model) {
      model.fetch();
    } else {
      model = new DISTILLD.Models.Whisky({ id: id });
      model.fetch({
        success: function () {
          that.add(that.model);
        }
      });
    }
    return model;
  }

});

DISTILLD.Collections.whiskys = new DISTILLD.Collections.Whiskys();
