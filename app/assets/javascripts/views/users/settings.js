DISTILLD.Views.UserSettings = Backbone.View.extend({

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  template: JST['users/settings'],

  tagName: "form",

  events: {
    "submit": "submit",
    "change #input-picture-file": "changePicture"
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

    this.model.save(attrs, {
      success: function () {
        Backbone.history.navigate("/#users/" + that.model.id, { trigger: true })
      }
    });
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
