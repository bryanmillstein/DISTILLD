DISTILLD.Views.UserShow = Backbone.CompositeView.extend({

  template: JST['users/show'],

  events: {
    'click .get-form': 'handlePostForm',
  },

  initialize: function () {
    this.bindScroll();
    this.collection.pageNum = 1;
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

    if (!this.model.get('is_current_user')) {
      this.addFriendButton();
    }

    this.renderPosts();

    return this;
  },

  bindScroll: function () {
    $(window).on("scroll", this.handleScroll.bind(this));
  },

  handleScroll: function (event) {
    var $doc = $(document);
    var scrolledDist = $doc.height() - window.innerHeight - $doc.scrollTop();

    if (scrolledDist < 300) {
      this.nextPageInfiniteScroll();
    }
  },

  nextPageInfiniteScroll: function () {
    if (this.requestingNextPage) return;

    this.requestingNextPage = true;
    this.posts.fetch({
      remove: false,
      data: {
        page: this.collection.pageNum + 1,
        user_id: this.model.id
      },
      success: function () {
        this.requestingNextPage = false;
        this.collection.pageNum++;
      }.bind(this)
    });
  },

  renderPosts: function () {
    this.posts.each(this.addPost.bind(this));
  },

  addPost: function (post) {
    var comments = post.comments();
    var view = new DISTILLD.Views.PostShow({ model: post, collection: this.posts, user: this.model, fetch: this.model, comments: comments });
    this.addSubview('.posts', view);
  },

  handlePostForm: function () {
    if (!this.formView) {
      var post = new DISTILLD.Models.Post();
      this.formView = new DISTILLD.Views.PostForm({ model: post, collection: this.posts, fetch: this.model });
      this.addSubview('.post-form', this.formView);
    } else {
      this.removeSubview('.post-form', this.formView);
      this.formView = null
    }
  },

  addFriendButton: function () {
    var view = new DISTILLD.Views.FriendshipButton({ model: this.model, fetch: this.model });
    this.addSubview('.friend-button', view);
  },

});
