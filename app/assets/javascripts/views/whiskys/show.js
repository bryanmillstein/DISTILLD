DISTILLD.Views.WhiskyShow = Backbone.CompositeView.extend({
  template: JST['whiskys/show'],
  className: 'whiskys-show',

  initialize: function (options) {
    this.bindScroll();
    this.collection.pageNum = 1;
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var content = this.template({ whisky: this.model, postCount: this.collection.length });
    this.$el.html(content);
    this.renderPosts();

    return this;
  },

  renderPosts: function () {
    this.collection.each(this.addPost.bind(this));
  },

  addPost: function (post) {
    var view = new DISTILLD.Views.PostItem({ model: post, collection: this.collection });

    this.addSubview('.whisky-posts', view);
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
    var that = this;
    if (this.requestingNextPage) return;

    this.requestingNextPage = true;
    this.collection.fetch({
      remove: false,
      data: {
        page: this.collection.pageNum + 1,
        whisky_id: this.whiskyId
      },
      success: function () {
        this.requestingNextPage = false;
        this.collection.pageNum++;
      }.bind(this)
    });
  },


});
