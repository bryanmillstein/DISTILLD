DISTILLD.Views.PlacesShow = Backbone.CompositeView({

  render: function () {
    var map = new google.maps.Map(document.getElementById('map'), {} ),
        placeId = this.model.get('place_id')
        request = { placeId: placeId },
        service = new google.maps.places.PlacesService(map),
        that = this;

    service.getDetails(request, function (place, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          var content = that.template({ post: that.model, user: that.user, place: place });
          that.$el.html(content);
        }
    });
  },
});
