DISTILLD.Views.CommentShow = Backbone.CompositeView.extend ({
  template: JST['comments/show'],
  className: 'comment-display',
  tagName: 'li',
  className: 'comment',

  initialize: function (options) {
    this.user = options.user;
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var content = this.template({ comment: this.model });
    this.$el.html(content);

    if (this.user && this.user.get('is_current_user')) {
      this.destroyCommentButton();
    }

    if (this.model.get('is_current_user')) {
      this.destroyCommentButton();
    }

    return this;
  },

  destroyCommentButton: function () {
    var view = new DISTILLD.Views.CommentDelete({ model: this.model, collection: this.collection });
    this.addSubview('.destroy-comment', view);
  }
});
