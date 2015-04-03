DISTILLD.Views.SuggestionItem = Backbone.View.extend({
  template: JST['suggestions/item'],
  tagName: 'li',

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var content = this.template({ suggestion: this.model });
    this.$el.html(content);

    return this;
  }

});
