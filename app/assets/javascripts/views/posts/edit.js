DISTILLD.Views.PostEdit = Backbone.View.extend ({
  template: JST['posts/edit'],
  tagName: 'form',
  events: {
    'submit': 'updatePost'
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  updatePost: function () {
    event.preventDefault();
    var attrs = this.$el.serializeJSON(),
        that = this;

    this.model.save(attrs);
  }

});
