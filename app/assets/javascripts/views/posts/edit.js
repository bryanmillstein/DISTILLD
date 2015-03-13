DISTILLD.Views.PostEdit = Backbone.View.extend ({
  template: JST['posts/edit'],
  tagName: 'form',
  events: {
    'submit': 'updatePost'
  },

  render: function () {
    var content = this.template({ post: this.model });
    this.$el.html(content);
    return this;
  },

  updatePost: function () {
    event.preventDefault();
    var attrs = this.$el.serializeJSON(),
        that = this;

    this.model.set(attrs)
    this.model.save( {}, {
      success: function () {
        that.collection.add(that.model, { merge: true })
      }
    });
  }

});
