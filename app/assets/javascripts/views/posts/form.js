DISTILLD.Views.PostForm = Backbone.View.extend({
  template: JST['posts/form'],
  tagName: 'form',
  events: {
    'submit': 'submitPost'
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
        that.collection.add(that.model, { merge: true })
      }
    });
  }
})
