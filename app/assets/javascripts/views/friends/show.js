DISTILLD.Views.FriendShow = Backbone.View.extend ({
  template: JST['friends/show'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render)
  },

  render: function () {
    var content = this.template({ friend: this.model });
    this.$el.html(content);

    return this;
  }

});
