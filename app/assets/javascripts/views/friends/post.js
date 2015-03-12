DISTILLD.Views.FriendsPost = Backbone.CompositeView.extend({
  template: JST['friends/post'],

  render: function () {
    var content = this.template({ model: this.model });
    this.$el.html(content);
    return this;
  }

});
