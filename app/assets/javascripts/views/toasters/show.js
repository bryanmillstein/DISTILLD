DISTILLD.Views.ToasterShow = Backbone.View.extend({
  template: JST['toasters/show'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function() {
    var content = this.template({ toaster: this.model });
    this.$el.html(content);

    return this;
  }
})
