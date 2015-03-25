DISTILLD.Views.PlacesShow = Backbone.CompositeView.extend({
  template: JST['places/show'],
  className: 'places-show',

  initialize: function (options) {
    this.placeId = options.place_id
    this.bindScroll();
    this.collection.pageNum = 1;
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function () {
    if (!this.place) {
      var map = new google.maps.Map(document.getElementById('map'), {} ),
          request = { placeId: this.placeId },
          service = new google.maps.places.PlacesService(map),
          that = this;

      service.getDetails(request, function (place, status) {
          that.place = place;
          if (status == google.maps.places.PlacesServiceStatus.OK) {
            var content = that.template({ place: that.place });
            that.$el.html(content);
          }
      });

      this.collection.fetch({
        data: { place_id: this.placeId },
        success: function () {
          that.renderPosts();
        }
      });
    } else {

      var content = this.template({ place: this.place });
      this.$el.html(content);
      this.renderPosts();
      
    }


    return this;
  },

  renderPosts: function () {
    this.collection.each(this.addPost.bind(this));
  },

  addPost: function (post) {
    var view = new DISTILLD.Views.PlaceItem({ model: post, collection: this.collection });

    this.addSubview('.place-posts', view);
  },

  bindScroll: function () {
    $(window).on("scroll", this.handleScroll.bind(this));
  },

  handleScroll: function (event) {
    var $doc = $(document);
    var scrolledDist = $doc.height() - window.innerHeight - $doc.scrollTop();

    if (scrolledDist < 300) {
      this.nextPageInfiniteScroll();
    }
  },

  nextPageInfiniteScroll: function () {
    var that = this;
    if (this.requestingNextPage) return;

    this.requestingNextPage = true;
    this.collection.fetch({
      remove: false,
      data: {
        page: this.collection.pageNum + 1,
        place_id: this.placeId
      },
      success: function () {
        this.requestingNextPage = false;
        this.collection.pageNum++;
      }.bind(this)
    });
  },


});
