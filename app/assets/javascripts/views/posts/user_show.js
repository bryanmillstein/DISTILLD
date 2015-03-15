 DISTILLD.Views.UserPostShow = Backbone.CompositeView.extend ({
  template: JST['posts/show'],
  className: 'post-display',
  events: {
    'click .post-options': 'addOptions',
  },

  initialize: function (options) {
    this.user = options.user
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var content = this.template({ post: this.model });
    this.$el.html(content);

    return this;
  },

  addOptions: function () {
    if (!this.editDelete) {
      this.addEditForm();
      this.addDeleteButton();
      this.editDelete = 1
    }
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
