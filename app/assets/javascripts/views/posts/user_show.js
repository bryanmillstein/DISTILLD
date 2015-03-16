 DISTILLD.Views.UserPostShow = Backbone.CompositeView.extend ({
  template: JST['posts/show'],
  className: 'post-display',
  events: {
    'click .post-options': 'addOptions',
  },

  initialize: function (options) {
    this.user = options.user;
    this.comments = options.comments;
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.collection, 'remove', this.render);
  },

  render: function () {
    var content = this.template({ post: this.model, options: true });
    this.$el.html(content);

    this.renderComments();
    return this;
  },

  addOptions: function () {
    if (!this.editDelete) {
      this.addEditForm();
      this.addDeleteButton();
      this.editDelete = 1
    }
  },

  renderComments: function () {
    this.comments.each(this.addComment.bind(this));
  },

  addComment: function (comment) {
    var view = new DISTILLD.Views.CommentShow({ model: comment, collection: this.comments, user: this.user })
    this.addSubview('.comments', view);
  },

  addEditForm: function () {
    var formView = new DISTILLD.Views.PostEdit({ model: this.model, collection: this.collection, user: this.user });
    this.addSubview('.edit-form', formView);

  },

  addDeleteButton: function () {
    var formView = new DISTILLD.Views.PostDelete({ model: this.model, collection: this.collection });
    this.addSubview('.delete-btn', formView);

  },

});
