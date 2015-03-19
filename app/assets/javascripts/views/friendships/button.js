DISTILLD.Views.FriendshipButton = Backbone.View.extend({
  template: JST['friendship/button'],
  tagName: 'form',
  events: {
    'submit': 'changeFriendship'
  },

  initialize: function (options) {
    // this.listenTo(this.model, 'request', this.render);
    this.fetch = options.fetch;
  },

  render: function () {
    var friend
    if (this.model.get('is_friend')) {
      friend = true
    } else {
      friend = null
    }

    var content = this.template({ friend: friend });
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
        that.fetch.fetch();
      }
    });

  }

});
