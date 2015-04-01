DISTILLD.Views.WhiskySuggestionForm = Backbone.CompositeView.extend({
  template: JST['suggestions/whisky_form'],
  tagName: 'form',
  events: {
    'click .submit-suggestion': 'submitSuggestion',
    "keyup .input-friend-search": "handleInput",
    "click .friend-choice": "selectFriend",
  },


  initialize: function (options) {
    this.whisky_id = options.whisky_id;
  },

  render: function () {
    var content = this.template({ suggestion: this.model });
    this.$el.html(content);

    return this;
  },

  selectFriend: function (event) {
    var choice = $(event.currentTarget);
    var friendId = choice.data('id');
    var content = choice.html();

    this.model.set({ recipient_id: friendId });
    this.$('.friends').empty();
    document.getElementById('form-friend').value = content
    /* Change class of submit button so it is toggled from hidden after user selects friend. */
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
    this.$('.friends').empty();

    for (var i = 0; i < friends.length; i++) {
      var friend = friends[i];

      var $li = $("<li class='friend-choice'></li>");
      $li.append(friend.user_name);
      $li.data('id', friend.id)

      this.$('.friends').append($li);
    }
  },

  addFriend: function (friend) {
    var view = new DISTILLD.Views.FriendItem({ model: friend });
    this.addSubview('.friends', view);
  },

  submitSuggestion: function (event) {
    event.preventDefault();
    var body = this.$('.form-textarea').val(),
        that = this;

    this.model.set({ body: body,
                     whisky_id: this.whisky_id });
    debugger
    this.model.save({}, {
      success: function () {
        Backbone.history.navigate('whisky/' + that.whisky_id, { trigger: true })
      }
    });
  },

});
