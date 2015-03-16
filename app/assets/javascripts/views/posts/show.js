DISTILLD.Views.PostShow = Backbone.CompositeView.extend ({
  template: JST['posts/show'],
  className: 'post-display',
  events: {
    'click #comment-form': 'addCommentForm'
  },

  initialize: function (options) {
    this.user = options.user
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.collection, 'add remove', this.render);

  },

  render: function () {
    var content = this.template({ post: this.model, options: false });
    this.$el.html(content);


    this.renderComments();
    return this;
  },

  renderComments: function () {
    this.collection.each(this.addComment.bind(this));
  },

  addComment: function (comment) {
    var view = new DISTILLD.Views.CommentShow({ model: comment, collection: this.collection, user: this.user })
    this.addSubview('.comments', view);
  },

  addCommentForm: function () {
    if (!this.formView) {
      var comment = new DISTILLD.Models.Comment();
      this.formView = new DISTILLD.Views.CommentForm({ model: comment, collection: this.collection, post: this.model, user: this.user })
      this.addSubview('.comment-form', this.formView);
    }
  }

});
