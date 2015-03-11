DISTILLD.Views.PostShow = Backbone.View.extend ({
  template: JST['posts/show'],
  className: 'post-display',

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    // this.listenTo(this.collection, 'add', this.render);

  },

  render: function () {
    var content = this.template({ post: this.model });
    this.$el.html(content);
    return this;
  }

});
