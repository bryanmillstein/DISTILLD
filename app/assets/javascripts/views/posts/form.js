DISTILLD.Views.PostForm = Backbone.View.extend({
  template: JST['posts/form'],
  tagName: 'form',
  events: {
    'submit': 'submitPost'
  },

  initialize: function (options) {
    this.user = options.user;
  },

  render: function () {
    var content = this.template({ post: this.model });
    this.$el.html(content);
    return this;
  },

  submitPost: function () {
    event.preventDefault();
    var attrs = this.$el.serializeJSON(),
        that = this;

    this.model.set(attrs);
    this.model.save({}, {
      success: function () {
        that.user.fetch();
      }
    });
  }
})
