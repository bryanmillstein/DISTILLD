DISTILLD.Views.PostsIndex = Backbone.CompositeView.extend({
  template: JST['posts/index'],
  events: {
    'click .get-form': 'handlePostForm',
    'click .post-options': 'addCommentForm',
    'click .picture-form': 'addPictureForm',
    'click .tour-guide-feed-close': 'closeFeedTour'
  },

  initialize: function (options) {
    this.bindScroll();
    this.collection.pageNum = 1;
    this.listenTo(this.collection, 'add sync', this.render);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);

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
    this.collection.fetch({
      remove: false,
      data: {
        page: this.collection.pageNum + 1
      },
      success: function () {
        this.requestingNextPage = false;
        this.collection.pageNum++;
      }.bind(this)
    });
  },

  renderPosts: function () {
    this.collection.each(this.addPost.bind(this));
  },

  addPost: function (post) {
    var comments = post.comments();

    var view = new DISTILLD.Views.PostShow({ model: post, comments: comments, fetch: this.collection, user: null })
    this.addSubview('.posts', view);

  },

  handlePostForm: function () {
    if (!this.postFormView) {
      var post = new DISTILLD.Models.Post();
      this.postFormView = new DISTILLD.Views.PostForm({ model: post, fetch: this.collection });
      this.addSubview('.post-form', this.postFormView);
    } else {
      this.removeSubview('.post-form', this.postFormView);
      this.postFormView = null
    }
  },

  closeFeedTour: function () {
    $('.tour-guide-feed')[0].classList.add('hidden');
  }
})
