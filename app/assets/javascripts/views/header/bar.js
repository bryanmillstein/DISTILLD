DISTILLD.Views.Header = Backbone.CompositeView.extend({
  template: JST['header/bar'],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
});
