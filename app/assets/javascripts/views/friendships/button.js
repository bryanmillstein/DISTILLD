DISTILLD.Views.FriendshipButton = Backbone.View.extend({
  template: JST['friendship/button'],
  tagName: 'form',
  events: {
    'submit': 'changeFriendship'
  },

  initialize: function () {
    // this.listenTo(this.model, 'request', this.render);
  },

  render: function () {
    if (this.model.get('is_friend')) {
      message = "Remove As Friend"
    } else {
      message = "Add As Friend"
    }

    var content = this.template({ action: message });
    this.$el.html(content);

    return this;
  },

  changeFriendship: function () {
    event.preventDefault();
    var friendId = this.model.id,
        that = this;

    $.ajax({
      url: "api/friendships",
      type: "POST",
      data: {
        friend_id: friendId,
      },
      success: function () {
        that.model.fetch();
      }
    });

  }

});
