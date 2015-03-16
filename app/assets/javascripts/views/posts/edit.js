DISTILLD.Views.PostEdit = Backbone.View.extend ({
  template: JST['posts/edit'],
  tagName: 'form',
  events: {
    'submit': 'updatePost'
  },

  initialize: function (options) {
    this.user = options.user
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
        that.collection.add(that.model, { merge: true });
        Backbone.history.navigate('/users/'+ that.user.id, { trigger: true });
      }
    });
  }

});
