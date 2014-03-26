var SurfWallApp = new (Backbone.Router.extend({
  routes: {
    '': 'index',
    'picture/:id': 'show'
  },
  start: function(){
    Backbone.history.start();
  },
  initialize: function() {
    this.pictureList = new PictureList();
    this.pictureListView = new PictureListView({collection: this.pictureList});
    $('body').append(this.pictureListView.el);
    console.log(this.pictureListView.el);
    $('#container').hide().appendTo('body').fadeIn(900);
  },
  index: function(){
    reRender();
  },
  show: function(id){
    this.pictureList.focusOnPictureItem(id);
  }
}));