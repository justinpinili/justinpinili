// js/views/pictureView.js

var PictureListView = Backbone.View.extend({
  id: 'container',
  initialize: function() {
    this.collection.on('reset', this.render, this);
  },
  render: function(){
    this.collection.forEach(this.addOne, this);
        return this;
  },
  addOne: function(pictureModel){
    var pictureView = new PictureView({model: pictureModel});
    this.$el.append(pictureView.render().el); 
  }
});