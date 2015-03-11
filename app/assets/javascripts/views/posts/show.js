DISTILLD.Views.PostShow = Backbone.CompositeView.extend ({
  template: JST['posts/show'],
  className: 'post-display',
  events: {
    'click .delete-post': 'destroyPost',
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);

  },

  render: function () {
    var content = this.template({ post: this.model });
    this.$el.html(content);

    this.addEditForm();
    return this;
  },

  destroyPost: function (event) {
    var $target = $(event.currentTarget);
    var post = this.collection.get($target.attr('data-id'));
    post.destroy();
  },

  addEditForm: function () {
    var formView = new DISTILLD.Views.PostEdit({ model: this.model, collection: this.collection });
    this.$el.append(formView.render().$el)
  },


});
