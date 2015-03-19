DISTILLD.Views.PostForm = Backbone.View.extend({
  template: JST['posts/form'],
  tagName: 'form',
  events: {
    'click .submit': 'submitPost',
    "change #input-picture-file": "changePicture",
    "click .add-photo": "uploadPhoto"
  },

  initialize: function (options) {
    this.fetch = options.fetch;
  },

  render: function () {
    var content = this.template({ post: this.model });
    this.$el.html(content);
    return this;
  },

  submitPost: function (event) {
    event.preventDefault();
    var attrs = this.$el.serializeJSON(),
        that = this;

    this.model.set(attrs);
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
