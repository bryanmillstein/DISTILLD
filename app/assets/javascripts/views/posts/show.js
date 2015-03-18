DISTILLD.Views.PostShow = Backbone.CompositeView.extend ({
  template: JST['posts/show'],
  className: 'post-display',
  events: {
    'click #comment-form': 'addCommentForm'
  },

  initialize: function (options) {
    this.comments = this.model.comments();
    this.user = options.user;
    this.fetch = options.fetch
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.collection, 'add remove', this.render);
  },

  render: function () {
    var content = this.template({ post: this.model, options: false });
    this.$el.html(content);

    this.renderToast();
    this.renderComments();
    return this;
  },

  renderToast: function () {
    var view = new DISTILLD.Views.ToastButton({ model: this.model });
    this.addSubview('.toast-button', view);
  },

  renderComments: function () {
    this.comments.each(this.addComment.bind(this));
  },

  addComment: function (comment) {
    var view = new DISTILLD.Views.CommentShow({ model: comment, collection: this.comments, user: this.user })
    this.addSubview('.comments', view);
  },

  addCommentForm: function () {
    if (!this.formView) {
      this.formView = new DISTILLD.Views.CommentForm({ collection: this.comments, post: this.model, fetch: this.fetch })
      this.addSubview('.comment-form', this.formView);
    }
  }

});
