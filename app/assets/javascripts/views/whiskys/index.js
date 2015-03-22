DISTILLD.Views.WhiskyIndex = Backbone.CompositeView.extend({
  template: JST['whiskys/index'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);

    this.renderWhiskys();
    return this;
  },

  renderWhiskys: function () {
    this.collection.each(this.addWhisky.bind(this));
  },

  addWhisky: function (whisky) {
    var view = new DISTILLD.Views.WhiskyItem({ model: whisky })
    this.addSubview('.whiskys-list', view);
  },



});
