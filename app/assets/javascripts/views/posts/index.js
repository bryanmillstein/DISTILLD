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

    var view = new DISTILLD.Views.PostShow({ model: post, collection: comments, posts: this.collection })
    this.addSubview('.posts', view);
  },

  // addPictureForm: function () {
  //   if (!this.pictureFormView) {
  //     this.pictureFormView = new DISTILLD.Views.PictureForm({ model: post, collection: this.collection });
  //     this.addSubview('.picture-form', this.pictureFormView);
  //   }
  //
  //   <% if (!this.model.get('has_picture')) { %>
  //     <button class="picture-form">Add a profile picture</button>
  //   <% } else { %>
  //     <button class="picture-form">Change your profile picture</button>
  //   <% } %>
  //
  // },

  addPostForm: function () {
    if (!this.postFormView) {
      var post = new DISTILLD.Models.Post();
      this.postFormView = new DISTILLD.Views.PostForm({ model: post, collection: this.collection });
      this.addSubview('.post-form', this.postFormView);
    }
  },
})
