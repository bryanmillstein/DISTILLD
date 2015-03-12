DISTILLD.Views.FriendsPosts = Backbone.CompositeView.extend({
  template: JST['friends/posts'],

  // render: function () {
  //   var content = this.template();
  //   this.$el.html(content);
  //
  //   this.addPosts();
  //   return this;
  // },
  //
  // addPosts: function () {
  //   this.collection.each(this.createPostView.bind(this));
  // },
  //
  // createPostView: function () {
  //   var view = new DISTILLD.Views.FriendsPost({ model: this. })
  // }

});
