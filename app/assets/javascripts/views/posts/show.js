DISTILLD.Views.PostShow = Backbone.CompositeView.extend ({
  template: JST['posts/show'],
  className: 'post-display',
  events: {
    'click #comment-form': 'addCommentForm',
    'click .delete-post': 'destroyPost',
    'click .edit-post': 'addEditForm',

  },

  initialize: function (options) {
    this.comments = options.comments
    this.user = options.user;
    this.fetch = options.fetch
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.comments, 'add remove', this.render);
  },

  render: function () {
    var content = this.template({ post: this.model, user: this.user });
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
  },

  destroyPost: function (event) {
    var $target = $(event.currentTarget);
    var post = this.collection.get($target.attr('data-id'));
    post.destroy();
  },

  addEditForm: function () {
    var formView = new DISTILLD.Views.PostEdit({ model: this.model, collection: this.collection, user: this.user });
    this.addSubview('.edit-form', formView);

  },

});
