DISTILLD.Views.FriendsIndex = Backbone.CompositeView.extend ({
  template: JST['friends/index'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render)
  },


  render: function () {
    var friends = this.collection.length
    var content = this.template({ friends: friends, user: this.model });
    this.$el.html(content);

    this.renderFriends();
    return this;
  },

  renderFriends: function () {
    this.collection.each(this.addFriend.bind(this));
  },

  addFriend: function (friend) {
      var view = new DISTILLD.Views.FriendShow({ model: friend, collection: this.collection, fetch: this.model });
      this.addSubview('.friends', view);
  },

});
