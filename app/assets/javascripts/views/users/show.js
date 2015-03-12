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

    this.renderPosts();
    this.addPostForm();
    return this;
  },

  renderPosts: function () {
    this.collection.each(this.addPost.bind(this));
  },

  addPost: function (post) {
    var view = new DISTILLD.Views.PostShow({ model: post, collection: this.collection, user: this.model })
    this.addSubview('.posts', view);
  },

  addPostForm: function () {
    var post = new DISTILLD.Models.Post();
    var formView = new DISTILLD.Views.PostForm({ model: post, collection: this.collection });
    this.addSubview('.post-form', formView)
  },


});
