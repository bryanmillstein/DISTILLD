DISTILLD.Views.PostItem = Backbone.View.extend({
  template: JST['whiskys/postItem'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var content = this.template({ post: this.model });
    this.$el.html(content);
    return this;
  }
});
