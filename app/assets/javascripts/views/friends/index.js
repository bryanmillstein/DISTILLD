DISTILLD.Views.FriendsIndex = Backbone.CompositeView.extend ({
  template: JST['friends/index'],

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render)
  },


  render: function () {
    var friends = this.collection.length
    var content = this.template({ friends: friends });
    this.$el.html(content);

    this.renderFriends();
    return this;
  },

  renderFriends: function () {
    this.collection.each(this.addFriend.bind(this));
  },

  addFriend: function (friend) {
    var view = new DISTILLD.Views.FriendShow({ model: friend, collection: this.collection });
    this.addSubview('.friends', view);
  },

});
