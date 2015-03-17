DISTILLD.Views.CommentDelete = Backbone.View.extend ({
  template: JST['comments/delete'],
  tagName: 'form',
  events: {
    'click .delete-comment': 'destroyComment',
  },

  render: function () {
    var content = this.template({ comment: this.model });
    this.$el.html(content);
    return this;
  },

  destroyComment: function (event) {
    event.preventDefault();
    var $target = $(event.currentTarget);
    var comment = this.collection.get($target.attr('data-id'));
    comment.destroy();
  },

});
