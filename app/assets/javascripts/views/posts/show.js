DISTILLD.Views.PostShow = Backbone.CompositeView.extend ({
  template: JST['posts/show'],
  className: 'post-display',

  initialize: function (options) {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var content = this.template({ post: this.model });
    this.$el.html(content);

    if (DISTILLD.currentUser.id === this.model.get('user_id')) {
      this.addEditForm();
      this.addDeleteButton();

    }
    return this;
  },

  addEditForm: function () {
    var formView = new DISTILLD.Views.PostEdit({ model: this.model, collection: this.collection });
    this.addSubview('.edit-form', formView);

  },

  addDeleteButton: function () {
    var formView = new DISTILLD.Views.PostDelete({ model: this.model, collection: this.collection });
    this.addSubview('.delete-btn', formView);

  },

});
