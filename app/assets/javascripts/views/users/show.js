DISTILLD.Views.UserShow = Backbone.CompositeView.extend({

  template: JST['users/show'],

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
    var view = new DISTILLD.Views.PostShow({ model: post, collection: this.collection });
    this.addSubview('.posts', view);
  },

  renderUserPosts: function () {
    this.collection.each(this.addUserPost.bind(this));
    this.addPostForm();
  },

  addUserPost: function (post) {
    var view = new DISTILLD.Views.UserPostShow({ model: post, collection: this.collection });
    this.addSubview('.posts', view);
  },

  addPostForm: function () {
    var post = new DISTILLD.Models.Post();
    var formView = new DISTILLD.Views.PostForm({ model: post, collection: this.collection });
    this.addSubview('.post-form', formView);
  },

  addFriendButton: function () {
    var message
    if (this.model.get('is_friend')) {
      message = "Remove As Friend"
    } else {
      message = "Add As Friend"
    }

    var view = new DISTILLD.Views.FriendshipButton({ model: this.model, message: message });
    this.addSubview('.friend-button', view);
  },


});
