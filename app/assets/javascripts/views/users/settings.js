DISTILLD.Views.UserSettings = Backbone.View.extend({

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  template: JST['users/settings'],

  tagName: "form",

  events: {
    "click .submit": "submit",
    "change #input-picture-file": "changePicture",
    "click .change-photo": "uploadPhoto"
  },

  render: function () {
    var content = this.template({ user: this.model });
    this.$el.html(content);

    return this;
  },

  submit: function (event) {
    event.preventDefault();
    var attrs = this.$el.serializeJSON(),
        that = this;

    this.model.set(attrs);
    this.model.save({}, {
      success: function () {
        Backbone.history.navigate("/#users/" + that.model.id, { trigger: true })
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
      that.previewPic(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  },

  previewPic: function (src) {
    this.$("#picture-preview").attr("src", src);
  }

});
