DISTILLD.Views.PostForm = Backbone.CompositeView.extend({
  template: JST['posts/form'],
  tagName: 'form',
  events: {
    'click .submit-post': 'submitPost',
    "change #input-picture-file": "changePicture",
    "click .add-photo": "uploadPhoto",
    "keyup .input-whisky-search": "handleInput",
    "click .whisky-choice": "selectWhisky",
    "click span": "handleRating"
  },


  initialize: function (options) {
    this.fetch = options.fetch;
  },

  render: function () {
    var content = this.template({ post: this.model });
    this.$el.html(content);

    this.attachLocationSearchBox();
    return this;
  },

  handleRating: function (event) {
    var star = $(event.currentTarget),
        starId = star.data('id');

    for(var i = 1; i <= 5; i ++) {
      var star = document.getElementById(i);
      star.classList.remove('filled');
    }

    for(var i = 1; i <= starId; i ++) {
      var star = document.getElementById(i);
      star.classList.add('filled');
    }

    this.model.set({ rating: starId });
  },

  attachLocationSearchBox: function () {
    var input = this.$('#input-form-location'),
        searchBox = new google.maps.places.Autocomplete(input[0]),
        that = this;
        google.maps.event.addListener(searchBox, 'place_changed', function () {
          that.place = searchBox.getPlace();
        });

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

  uploadPhoto: function (event) {
    event.preventDefault();
    this.$("#input-picture-file").trigger("click");
  },

  changePicture: function (event) {
    var file = event.currentTarget.files[0],
        fileReader = new FileReader(),
        that = this;

    fileReader.onloadend = function () {
      that.model.set("picture", fileReader.result);
    };

    fileReader.readAsDataURL(file);
  },

  submitPost: function (event) {
    event.preventDefault();
    var placeId = this.place.place_id,
        place_name = this.place.name,
        place_formatted_address = this.place.vicinity,
        body = this.$('.form-textarea').val(),
        that = this;

    this.model.set({ place_id: placeId,
                     place_name: place_name,
                     place_formatted_address: place_formatted_address,
                     body: body});

    this.model.save({}, {
      success: function () {
        /* Add success message display */
        var body = $('#main'),
            message = '<div class="success-message-display"><p id="success-message">Post Made Successfully!<p><div>';

        body.append(message);
        var messageDom = $('.success-message-display');
        window.setTimeout(_.bind(that.removeMessage, that), 2000);
        that.fetch.fetch();
      }
    });
  },

  removeMessage: function () {
    var message = $('.success-message-display');
    message.remove();
  }

});
