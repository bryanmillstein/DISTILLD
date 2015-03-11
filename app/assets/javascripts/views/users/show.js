DISTILLD.Views.UserShow = Backbone.View.extend({
  // orderOptions: {
  //   modelElement: '.post-display',
  //   modelName: 'post',
  //   subviewContainer: '.posts'
  // },

  subviewContainer: '.posts',

  template: JST['users/show'],

  initialize: function () {
    this.collection = this.model.posts();
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var content = this.template({ user: this.model });
    this.$el.html(content);
    console.log("hey")

    this.renderPosts();
    return this;
  },

  renderPosts: function () {
    this.model.posts().each(this.addPost.bind(this));
  },

  addPost: function (post) {
    var view = new DISTILLD.Views.PostShow({ model: post })
    this.addSubview('.posts', view);
  },



  addSubview: function (selector, subview) {
    this.subviews(selector).push(subview);
    this.attachSubview(selector, subview.render());
  },

  attachSubview: function (selector, subview) {
    this.$(selector).append(subview.$el);
    subview.delegateEvents();

    if (subview.attachSubviews) {
      subview.attachSubviews();
    }
  },

  attachSubviews: function () {
    var that = this;
    _(this.subviews()).each(function (subviews, selector){
      view.$(selector).empty();
      _(subviews).each(function (subview) {
        view.attachSubview(selector, subview);
      });
    });
  },

  remove: function () {
    Backbone.View.prototype.remove.call(this);
    _(this.subviews()).each(function (subviews) {
      _(subviews).each(function (subviews) {
        subview.remove();
      });
    });
  },

  removeSubview: function (selector, subview) {
    subview.remove();

    var subviews = this.subviews(selector);
    subviews.splice(subviews.indexOf(subview), 1);
  },

  subviews: function (selector) {
    this._subviews = this._subviews || {};

    if (!selector) {
      return this._subviews;
    } else {
      this._subviews[selector] = this._subviews[selector] || [];
      return this._subviews[selector];
    }
  }


});
