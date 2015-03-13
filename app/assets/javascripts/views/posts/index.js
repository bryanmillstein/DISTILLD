DISTILLD.Views.PostsIndex = Backbone.CompositeView.extend({
  template: JST['posts/index'],

  initialize: function (options) {
    this.users = options.users
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.users, 'sync', this.render);


  },

  render: function () {
    var content = this.template();
    this.$el.html(content);

    this.renderPosts();
    this.addPostForm();
    return this;
  },

  renderPosts: function () {
    this.collection.each(this.addPost.bind(this));
  },

  addPost: function (post) {
    var userId = post.get('user_id');
    var user = this.users.getOrFetch(userId);

    var view = new DISTILLD.Views.PostShow({ model: post, collection: this.collection, user: user })
    this.addSubview('.posts', view);
  },

  addPostForm: function () {
    var post = new DISTILLD.Models.Post();
    var formView = new DISTILLD.Views.PostForm({ model: post, collection: this.collection });
    this.addSubview('.post-form', formView);
  },


})
