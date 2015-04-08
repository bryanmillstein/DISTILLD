DISTILLD.Views.CommentForm = Backbone.View.extend ({
  template: JST['comments/form'],
  events: {
    'submit': 'submit'
  },

  initialize: function (options) {
    this.post = options.post;
    this.model = new DISTILLD.Models.Comment();
    this.fetch = options.fetch

  },

  render: function () {
    var content = this.template();
    this.$el.html(content);

    return this;
  },

  submit: function () {
    event.preventDefault();
    var body = this.$('.form-body').val(),
        that = this;
    this.model.set({ body: body, post_id: this.post.id });

    this.model.save({}, {
      success: function () {
        /* Add success message display */
        var body = $('#main'),
            message = '<div class="success-message-display"><p id="success-message">Comment Added!<p><div>';

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
