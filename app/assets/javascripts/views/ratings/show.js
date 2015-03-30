DISTILLD.Views.RatingShow = Backbone.View.extend ({
  template: JST['ratings/show'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);

    for(var i = 1; i <= this.model.get('rating'); i ++) {
      var starDOM = this.$('#' + i);
      var star = starDOM[0];
      star.classList.add('filled');
    }

    return this;
  }

})
