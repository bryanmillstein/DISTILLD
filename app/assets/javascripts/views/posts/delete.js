DISTILLD.Views.PostDelete = Backbone.View.extend ({
  template: JST['posts/delete'],
  tagName: 'form',
  events: {
    'click .delete-post': 'destroyPost',
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
  },

});
