DISTILLD.Views.UserShow = Backbone.CompositeView.extend({

  template: JST['users/show'],

  events: {
    'click .get-form': 'addPostForm',
  },

  initialize: function () {
    this.collection = this.model.posts();
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.collection, 'add remove', this.render);

  },

  render: function () {
    var content = this.template({ user: this.model });
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
    this.collection.each(this.addPost.bind(this));
  },

  addPost: function (post) {
    var view = new DISTILLD.Views.PostShow({ model: post, collection: this.collection, user: this.model });
    this.addSubview('.posts', view);
  },

  renderUserPosts: function () {
    this.collection.each(this.addUserPost.bind(this));
  },

  addUserPost: function (post) {
    var view = new DISTILLD.Views.UserPostShow({ model: post, collection: this.collection });
    this.addSubview('.posts', view);
  },

  addPostForm: function () {
    if (!this.formView) {
      var post = new DISTILLD.Models.Post();
      this.formView = new DISTILLD.Views.PostForm({ model: post, collection: this.collection });
      this.addSubview('.post-form', this.formView);
    }
  },

  addFriendButton: function () {
    var view = new DISTILLD.Views.FriendshipButton({ model: this.model });
    this.addSubview('.friend-button', view);
  },

});
