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
    $('.info').hide().appendTo('body').fadeIn(900);
    $('#container').hide().appendTo('body').fadeIn(900);
  },
  index: function(){
    reRender();
  },
  show: function(id){
    this.pictureListView.focusOnPictureItem(id);
  }
}));