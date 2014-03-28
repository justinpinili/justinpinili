// js/views/pictureListView.js

var PictureListView = Backbone.View.extend({
  id: 'container',
  initialize: function() {
    this.collection.on('reset', this.render, this);
  },
  render: function(){
    if (this.collection.length == 1) {
      this.collection.forEach(this.addOneWithInformation, this);
    } else {
      this.collection.forEach(this.addOne, this);
    }
    var $container = $('#container');
    imagesLoaded( '#container', function() {
      $container.masonry();
    });
    return this;
  },
  addOne: function(pictureModel){
    var pictureView = new PictureView({model: pictureModel});
    this.$el.append(pictureView.render().el); 
  },
  addOneWithInformation: function(pictureModel){
    var pictureViewWithInformation = new PictureViewWithInformation({model: pictureModel});
    this.$el.append(pictureViewWithInformation.renderWithInformation().el); 
  },
  focusOnPictureItem: function(id){
    SurfWallApp.pictureList.fetch().done( function() {
      var focus = SurfWallApp.pictureList.get(id);
      while (SurfWallApp.pictureList.length > 0) {
        SurfWallApp.pictureList.remove(SurfWallApp.pictureList.at(0));
      }

      SurfWallApp.pictureList.add(focus);
      SurfWallApp.pictureListView = new PictureListView({collection: SurfWallApp.pictureList});
      SurfWallApp.pictureListView.render();
      $('.info').fadeOut(600, function(){
        $('.info').remove();
      });
      $('#container').fadeOut(600, function(){
        $('#container').remove();
        $('body').append(SurfWallApp.pictureListView.el);
        $('#container').hide().appendTo('body').fadeIn(600);
      });
    });
  }
});