DISTILLD.Views.PostsIndex = Backbone.CompositeView.extend({
  template: JST['posts/index'],
  events: {
    'click .get-form': 'addPostForm',
    'click .post-options': 'addCommentForm',
    'click .picture-form': 'addPictureForm',

  },

  initialize: function (options) {
    this.users = options.users
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.users, 'sync', this.render);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);

    this.renderPosts();
    return this;
  },

  renderPosts: function () {
    this.collection.each(this.addPost.bind(this));
  },

  addPost: function (post) {
    var comments = post.comments();

    var view = new DISTILLD.Views.PostShow({ model: post, collection: comments, fetch: this.collection })
    this.addSubview('.posts', view);
  },

  addPostForm: function () {
    if (!this.postFormView) {
      var post = new DISTILLD.Models.Post();
      this.postFormView = new DISTILLD.Views.PostForm({ model: post, fetch: this.collection });
      this.addSubview('.post-form', this.postFormView);
    }
  },
})
