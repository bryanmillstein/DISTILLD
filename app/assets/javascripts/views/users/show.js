DISTILLD.Views.UserShow = Backbone.CompositeView.extend({

  template: JST['users/show'],

  events: {
    'click .get-form': 'addPostForm',
  },

  initialize: function () {
    this.posts = this.model.posts();
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.posts, 'add remove', this.render);

  },

  render: function () {
    this.formView = null
    var message

    if (this.model.get('is_current_user')) {
      message = 'Your'
    } else {
      message = this.model.get('user_name') + "'s"
    }

    var content = this.template({ user: this.model, message: message });
    this.$el.html(content);

    if (this.model.get('is_current_user')) {
      this.renderUserPosts();
    } else {
      this.renderPosts();
      this.addFriendButton();
    }

    return this;
  },

  renderPosts: function () {
    this.posts.each(this.addPost.bind(this));
  },

  addPost: function (post) {
    var comments = post.comments();
    var view = new DISTILLD.Views.PostShow({ model: post, collection: comments, user: this.model, fetch: this.model });
    this.addSubview('.posts', view);
  },

  renderUserPosts: function () {
    this.posts.each(this.addUserPost.bind(this));
  },

  addUserPost: function (post) {
    var comments = post.comments();
    var view = new DISTILLD.Views.UserPostShow({ model: post, collection: this.posts, comments: comments, user: this.model });
    this.addSubview('.posts', view);
  },

  addPostForm: function () {
    if (!this.formView) {
      var post = new DISTILLD.Models.Post();
      this.formView = new DISTILLD.Views.PostForm({ model: post, collection: this.posts, fetch: this.model });
      this.addSubview('.post-form', this.formView);
    }
  },

  addFriendButton: function () {
    var view = new DISTILLD.Views.FriendshipButton({ model: this.model });
    this.addSubview('.friend-button', view);
  },

});
