DISTILLD.Views.FriendShow = Backbone.CompositeView.extend ({
  template: JST['friends/show'],
  tagName: 'li',

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render)
  },

  render: function () {
    var content = this.template({ friend: this.model });
    this.$el.html(content);

    this.friendStatus();

    return this;
  },

  friendStatus: function () {
    var view = new DISTILLD.Views.FriendshipButton({ model: this.model, fetch: this.collection });
    this.addSubview('.friend-button', view);
  }

});
