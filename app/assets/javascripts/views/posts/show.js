DISTILLD.Views.PostShow = Backbone.CompositeView.extend ({
  template: JST['posts/show'],
  className: 'post-display',
  events: {
    'click #comment-form': 'handleCommentForm',
    'click .delete-post': 'destroyPost',
    'click .edit-post': 'handleEditForm',

  },

  initialize: function (options) {
    this.comments = options.comments
    this.user = options.user;
    this.fetch = options.fetch
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.comments, 'add remove', this.render);
  },

  render: function () {
    if (this.model.get('place_name')) {
      var content = this.template({ post: this.model, user: this.user, place: true });
      this.$el.html(content);
    } else {
      var content = this.template({ post: this.model, user: this.user, place: null });
      this.$el.html(content);
    }

    if (this.model.get('rating')) {
      this.handleRating();
    }

    this.renderToast();
    this.renderComments();
    return this;
  },

  handleRating: function () {
    var ratingView = new DISTILLD.Views.RatingShow ({ model: this.model });
    this.addSubview('.rating', ratingView);

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

  handleCommentForm: function () {
    if (!this.formView) {
      this.formView = new DISTILLD.Views.CommentForm({ collection: this.comments, post: this.model, fetch: this.fetch })
      this.addSubview('.comment-form', this.formView);
    } else {
      this.removeSubview('.comment-form', this.formView);
      this.formView = null
    }
  },

  destroyPost: function (event) {
    var $target = $(event.currentTarget);
    var post = this.collection.get($target.attr('data-id'));
    post.destroy();
  },

  handleEditForm: function () {
    if (!this.editFormView) {
      this.editFormView = new DISTILLD.Views.PostEdit({ model: this.model, collection: this.collection, user: this.user });
      this.addSubview('.edit-form', this.editFormView);
    } else {
      this.removeSubview('.edit-form', this.editFormView);
      this.editFormView = null
    }
  },

});
