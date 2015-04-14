DISTILLD.Views.WhiskyIndex = Backbone.CompositeView.extend({
  template: JST['whiskys/index'],

  events: {
    "click #whisky-headline": "showSuggestionsFalse",
    "click #whisky-suggestions": "showSuggestionsTrue",
    "click .tour-guide-whisky-close": "closeWhiskyTour"
  },

  initialize: function (options) {
    this.suggestions = options.suggestions;
    this.showSuggestions = false;
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var content = this.template({ user: this.model, suggestion: this.showSuggestions });
    this.$el.html(content);

    if (this.showSuggestions) {
      this.renderSuggestions();
    } else {
      this.renderWhiskys();
    }
    return this;
  },

  showSuggestionsTrue: function () {
    this.showSuggestions = true;
    this.render();
  },

  showSuggestionsFalse: function () {
    this.showSuggestions = false;
    this.render();
  },

  renderWhiskys: function () {
    this.collection.each(this.addWhisky.bind(this));
  },

  addWhisky: function (whisky) {
    var view = new DISTILLD.Views.WhiskyItem({ model: whisky })
    this.addSubview('.whiskys-list', view);
  },

  renderSuggestions: function () {
    this.suggestions.each(this.addSuggestion.bind(this));
  },

  addSuggestion: function (suggestion) {
    var view = new DISTILLD.Views.SuggestionItem({ model: suggestion })
    this.addSubview('.whiskys-list', view);
  },

  closeWhiskyTour: function () {
    $('.tour-guide-whisky')[0].classList.add('hidden');

  }


});
