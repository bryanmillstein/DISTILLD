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


    this.renderComments();
    return this;
  },

  renderComments: function () {
    this.collection.each(this.addComment.bind(this));
  },

  addComment: function (comment) {
    var view = new DISTILLD.Views.CommentShow({ model: comment, collection: this.collection })
    this.addSubview('.comments', view);
  },

});
