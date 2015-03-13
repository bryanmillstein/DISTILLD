DISTILLD.Views.FriendshipAdd = Backbone.View.extend({
  template: JST['friendship/add'],
  tagName: 'form',
  events: {
    'submit': 'addFriendship'
  },

  render: function () {
    var content = this.template({ post: this.model });
    this.$el.html(content);
    return this;
  },

  addFriendship: function () {
    var friendship = new DISTILLD.Models.Friendship({ user_id: DISTILLD.currentUser.id, friend_id: this.model.id })
    friendship.save({}, {
      success: function () {
        that.collection.add(that.model, { merge: true })
      }
    });
  }
})
