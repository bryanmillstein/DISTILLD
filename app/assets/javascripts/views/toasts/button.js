DISTILLD.Views.ToastButton = Backbone.View.extend({
  template: JST['toasts/button'],
  events: {
    'click .toast-button': 'changeToastStatus'
  },

  render: function () {
    var message;

    if (this.model.get('current_user_toast')) {
      message = 'Toast'
    } else {
      message = 'Toasted'
    }

    var content = this.template({ message: message });
    this.$el.html(content);

    return this;
  },

  changeToastStatus: function () {
    var postId = this.model.id,
        that = this;

    $.ajax ({
      url: 'api/toasts',
      type: "POST",
      data: {
        post_id: postId,
      },
      success: function () {
        that.model.fetch()
      }
    });
  }
})
