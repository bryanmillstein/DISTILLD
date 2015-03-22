DISTILLD.Views.WhiskyItem = Backbone.View.extend ({
  template: JST['whiskys/item'],
  tagName: 'li',

  initialize: function (options) {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var content = this.template({ whisky: this.model });
    this.$el.html(content);

    return this;
  }

});
