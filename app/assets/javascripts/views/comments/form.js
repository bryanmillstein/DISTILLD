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
        that.fetch.fetch();
      }
    });
  }

});
