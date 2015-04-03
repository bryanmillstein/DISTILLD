DISTILLD.Views.SuggestionForm = Backbone.CompositeView.extend({
  template: JST['suggestions/form'],
  tagName: 'form',
  events: {
    'click .submit-suggestion': 'submitSuggestion',
    "keyup .input-whisky-search": "handleInput",
    "click .whisky-choice": "selectWhisky",
    "click span": "handleRating"
  },


  initialize: function (options) {
    this.user_id = options.user_id;
  },

  render: function () {
    var content = this.template({ suggestion: this.model });
    this.$el.html(content);

    return this;
  },

  selectWhisky: function (event) {
    var choice = $(event.currentTarget);
    var whiskyId = choice.data('id');
    var content = choice.html();

    this.model.set({ whisky_id: whiskyId });
    this.$('.whiskys').empty();
    document.getElementById('form-drink').value = content
  },

  handleInput: function () {
    var val = this.$('.input-whisky-search').val(),
        upcase = val.charAt(0).toUpperCase() + val.substring(1),
        that = this;

    if (val.length > 1) {
      $.ajax({
        url: "api/whisky",
        dataType: "json",
        method: "GET",
        data: { query: val,
                upcase: upcase },
        success: this.renderWhisksy.bind(this)
      });
    }
  },

  renderWhisksy: function (whiskys) {
    this.$('.whiskys').empty();

    for (var i = 0; i < whiskys.length; i++) {
      var whisky = whiskys[i];

      var $li = $("<li class='whisky-choice'></li>");
      $li.append(whisky.name);
      $li.append(' from ');
      $li.append(whisky.brand);
      $li.data('id', whisky.id)

      this.$('.whiskys').append($li);
    }
  },

  addWhisky: function (whisky) {
    var view = new DISTILLD.Views.WhiskyItem({ model: whisky });
    this.addSubview('.whiskys', view);
  },

  submitSuggestion: function (event) {
    event.preventDefault();
    var body = this.$('.form-textarea').val(),
        that = this;

    this.model.set({ body: body,
                     recipient_id: this.user_id });

    this.model.save({}, {
      success: function () {
        var button = document.getElementById('get-suggestion');
      }
    });
  },

});
