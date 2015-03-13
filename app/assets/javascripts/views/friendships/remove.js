DISTILLD.Views.FriendshipRemove = Backbone.View.extend({
  template: JST['friendship/remove'],
  tagName: 'form',
  events: {
    'click .add-friend': 'destroyFriendship'
  },

  render: function () {
    var content = this.template({ post: this.model });
    this.$el.html(content);
    return this;
  },

  destroyFriendship: function (event) {
    var $target = $(event.currentTarget);
    var friendship = this.collection.get($target.attr('data-id'));
    friendship.destroy();
  },

});
