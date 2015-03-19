DISTILLD.Views.PostForm = Backbone.View.extend({
  template: JST['posts/form'],
  tagName: 'form',
  events: {
    'submit': 'submitPost'
  },

  initialize: function (options) {
    this.fetch = options.fetch;
  },

  render: function () {
    var content = this.template({ post: this.model });
    this.$el.html(content);
    return this;
  },

  submitPost: function (event) {
    event.preventDefault();
    var attrs = this.$el.serializeJSON(),
        that = this;

    this.model.set(attrs);
    this.model.save({}, {
      success: function () {
        that.fetch.fetch();
      }
    });
  }
})
