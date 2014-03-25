// js/views/pictureView.js

var PictureListView = Backbone.View.extend({
  id: 'container',
  initialize: function(){
    this.collection.on('reset', this.render, this);
  },
  render: function(){
    this.addAll();
    return this;
  },
  addAll: function(){
    this.$el.empty();
    this.collection.forEach(this.addOne);
  },
  addOne: function(pictureModel){
    var pictureView = new PictureView({model: pictureModel});
    this.$el.append(pictureView.render().el); 
  }
});