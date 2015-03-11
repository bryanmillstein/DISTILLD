DISTILLD.Views.UsersIndex = Backbone.View.extend ({
  template: JST['users/index'],
  render: function () {
    var content = this.template({ users: this.collection })
    this.$el.html(content);
    return this;
  }
});
