// js/views/pictureListView.js
var x;

var PictureListView = Backbone.View.extend({
  id: 'container',
  initialize: function() {
    this.collection.on('reset', this.render, this);
  },
  render: function(){
    x = this.collection;
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
  }
});