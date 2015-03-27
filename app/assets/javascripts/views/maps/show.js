DISTILLD.Views.MapShow = Backbone.View.extend({
  attributes: {
    id: "map-canvas"
  },

  render: function () {
    var mapOptions = {
      zoom: 12,
      center: { lat: 37, lng: -122 }
    };

    var map = new google.maps.Map(this.$el, mapOptions );

  }

});
