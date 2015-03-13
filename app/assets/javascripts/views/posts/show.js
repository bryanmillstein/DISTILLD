DISTILLD.Views.PostShow = Backbone.CompositeView.extend ({
  template: JST['posts/show'],
  className: 'post-display',

  initialize: function (options) {
    this.user = options.user
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var content = this.template({ post: this.model, user: this.user });
    this.$el.html(content);

    return this;
  },

});
