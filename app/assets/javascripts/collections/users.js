DISTILLD.Collections.Users = Backbone.Collection.extend ({
    url: 'api/users',
    model: DISTILLD.Models.User,
    getOrFetch: function (id) {
      var model = this.get(id),
          that = this;

      if (model) {
        model.fetch();
      } else {
        model = new DISTILLD.Models.User({ id: id });
        model.fetch({
          success: function () {
            that.add(that.model);
          }
        });
      }
      return model;
    }
});
