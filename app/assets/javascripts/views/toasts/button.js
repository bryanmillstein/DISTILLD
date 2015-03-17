DISTILLD.Views.ToastButton = Backbone.View.extend({
  template: JST['toasts/button'],
  tagName: 'form',
  events: {
    'submit': 'changeToastStatus'
  },

  initialize: function () {
    this.listenTo(this.model, 'request', this.render);
    this.status = (this.model.get('current_user_toast'));
    this.toasts = (this.model.get('toast_number'));
  },

  render: function () {
    var message;

    if (this.status) {
      message = 'Toasted';
    } else {
      message = 'Toast';
    }

    var content = this.template({ message: message, toasts: this.toasts });
    this.$el.html(content);


    return this;
  },

  changeToastStatus: function () {
    event.preventDefault();
    var postId = this.model.id,
        that = this;

    $.ajax ({
      url: 'api/toasts',
      type: "POST",
      data: {
        post_id: postId,
      },
      success: function () {
        that.status ? that.toasts-- : that.toasts++;
        that.status ? that.status = false : that.status = true;
        that.render();
      }
    });
  }
})
