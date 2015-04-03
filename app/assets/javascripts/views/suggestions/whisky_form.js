DISTILLD.Views.WhiskySuggestionForm = Backbone.CompositeView.extend({
  template: JST['suggestions/whisky_form'],
  tagName: 'form',
  events: {
    'click #reccomendation-button': 'submitSuggestion',
    "keyup .input-friend-search": "handleInput",
    "click .user-entry": "selectFriend",

  },


  initialize: function (options) {
    this.whisky = options.whisky;
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var content = this.template({ suggestion: this.model });
    this.$el.html(content);

    return this;
  },

  selectFriend: function (event) {
    var choice = $(event.currentTarget);
    var friendId = choice.data('id');
    var content = choice.data('name')


    this.model.set({ recipient_id: friendId });
    this.$('.friend-choices').empty();
    document.getElementById('form-friend').value = content
    var toggleButton = document.getElementById('reccomendation-button');
    toggleButton.classList.add('highlight-button');

  },

  handleInput: function () {
    var val = this.$('.input-friend-search').val(),
        upcase = val.charAt(0).toUpperCase() + val.substring(1),
        lowercase = val.toLowerCase(),
        that = this;
    if (val.length > 1) {
      $.ajax({
        url: "api/friend",
        dataType: "json",
        method: "GET",
        data: { query: val,
                upcase: upcase,
                lowercase: lowercase },
        success: this.renderFriend.bind(this)
      });
    }
  },

  renderFriend: function (friends) {
    this.$('.friend-choices').empty();

    for (var i = 0; i < friends.length; i++) {
      this.addFriend(friends[i]);
    }
  },

  addFriend: function (friend) {
    var view = new DISTILLD.Views.UserItem({ model: friend });
    this.addSubview('.friend-choices', view);
  },

  submitSuggestion: function (event) {
    event.preventDefault();
    var body = this.$('.form-textarea').val(),
        that = this;

    this.model.set({ body: body,
                     whisky_id: this.whisky.id });

    this.model.save({}, {
      success: function () {
        that.whisky.fetch();
      }
    });
  },

});
