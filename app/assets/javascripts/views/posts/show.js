DISTILLD.Views.PostShow = Backbone.View.extend ({
  template: JST['posts/show'],
  className: 'post-display',
  events: {
    'click .delete-post': 'destroyPost'
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);

  },

  render: function () {
    var content = this.template({ post: this.model });
    this.$el.html(content);
    return this;
  },

  destroyPost: function (event) {
    var $target = $(event.currentTarget);
    var post = this.collection.get($target.attr('data-id'));
    post.destroy();
  }

});
