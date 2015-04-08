DISTILLD.Views.FriendshipButton = Backbone.View.extend({
  template: JST['friendship/button'],
  tagName: 'form',
  events: {
    'submit': 'changeFriendship'
  },

  initialize: function (options) {
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
        /* Add success message display */
        var body = $('#main'),
            message = '<div class="success-message-display"><p id="success-message">Updated!<p><div>';

        body.append(message);
        window.setTimeout(_.bind(that.removeMessage, that), 2000);

        that.fetch.fetch();
      }
    });

  },

  removeMessage: function () {
    var message = $('.success-message-display');
    message.remove();
  }

});
