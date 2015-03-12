DISTILLD.Views.PostsIndex = Backbone.CompositeView.extend({
  template: JST['posts/index'],

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render)
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
    var view = new DISTILLD.Views.PostShow({ model: post, collection: this.collection })
    this.addSubview('.posts', view);
  },


})
