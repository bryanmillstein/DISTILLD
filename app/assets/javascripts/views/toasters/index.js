DISTILLD.Views.ToasterIndex = Backbone.CompositeView.extend({
  template: JST['toasters/index'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function() {
    var content = this.template({});
    this.$el.html(content);

    this.addToasters();
    return this;
  },

  addToasters: function () {
    this.collection.each(this.addToaster.bind(this));
  },

  addToaster: function(toaster) {
    var toasterView = new DISTILLD.Views.ToasterShow({ model: toaster });
    this.addSubview('.toaster-list', toasterView);
  }

})
