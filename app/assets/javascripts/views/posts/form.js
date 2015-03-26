DISTILLD.Views.PostForm = Backbone.CompositeView.extend({
  template: JST['posts/form'],
  tagName: 'form',
  events: {
    'click .submit': 'submitPost',
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

    debugger
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
    var val = this.$('.input-whisky-search').val();
    var that = this;

    $.ajax({
      url: "api/whisky",
      dataType: "json",
      method: "GET",
      data: { query: val },
      success: this.renderWhisksy.bind(this)
    });
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

  submitPost: function (event) {
    event.preventDefault();
    var placeId = this.place.place_id
        place_name = this.place.name,
        place_formatted_address = this.place.vicinity,
        body = this.$('#form-textarea').val()
        that = this;

    this.model.set({ place_id: placeId,
                     place_name: place_name,
                     place_formatted_address: place_formatted_address,
                     body: body});

    this.model.save({}, {
      success: function () {
        that.fetch.fetch();
      }
    });
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
  }

});
