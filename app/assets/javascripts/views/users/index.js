DISTILLD.Views.UsersIndex = Backbone.View.extend ({
  // initialize: function () {
  //   this.listenTo(this.collection, 'sync', this.render)
  // },

  template: JST['users/index'],

  render: function () {
    var content = this.template({ users: this.collection })
    this.$el.html(content);
    this.addPostForm();

    return this;
  },

});
