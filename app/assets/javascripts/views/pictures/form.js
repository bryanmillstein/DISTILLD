DISTILLD.Views.PictureForm = Backbone.View.extend({
  template: JST['pictures/form'],
  tagName: 'form',
  events: {
    'submit': 'submitPicture'
  },

  render: function () {
    var content = this.template({});
    this.$el.html(content);
    return this;
  },

  submitPost: function () {
    event.preventDefault();
    var picture = this.$("#input-picture-file").val(),
        that = this;

    this.model.set({ picture: picture });
    this.model.save({}, {
      success: function () {
        Backbone.history.navigate("", { triggger: true })
      }
    });
  }
})
