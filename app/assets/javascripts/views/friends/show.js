DISTILLD.Views.FriendShow = Backbone.CompositeView.extend ({
  template: JST['friends/show'],
  tagName: 'li',

  initialize: function (options) {
    this.fetch = options.fetch
    this.listenTo(this.model, 'sync', this.render)
  },

  render: function () {
    var content = this.template({ friend: this.model });
    this.$el.html(content);

    if (!this.model.get('is_current_user')) {
      this.friendStatus();
    }

    return this;
  },

  friendStatus: function () {
    var view = new DISTILLD.Views.FriendshipButton({ model: this.model, fetch: this.fetch });
    this.addSubview('.friend-button', view);
  }

});
