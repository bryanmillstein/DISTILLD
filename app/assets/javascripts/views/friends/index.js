DISTILLD.Views.FriendsIndex = Backbone.CompositeView.extend ({
  template: JST['friends/index'],

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render)
  },


  render: function () {
    this.collection.each(this.addFriend.bind(this));
  },

  addFriend: function (friend) {
    var view = new DISTILLD.Views.FriendShow({ model: friend });
    this.addSubview('.friends', view);
  },

});
