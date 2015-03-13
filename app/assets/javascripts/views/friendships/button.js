DISTILLD.Views.FriendshipButton = Backbone.View.extend({
  template: JST['friendship/button'],
  tagName: 'form',
  events: {
    'submit': 'changeFriendship'
  },

  initialize: function (options) {
    this.message = options.message;
  },

  render: function () {
    var content = this.template({ action: this.message });
    this.$el.html(content);
    return this;
  },

  changeFriendship: function () {
    var friendId = this.model.id

    $.ajax({
      url: "/friendships",
      type: "POST",
      data: {
        friend_id: friendId,
      }
    });
  }

});
