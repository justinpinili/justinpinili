var SurfWallApp = new (Backbone.Router.extend({
  routes: {
    '': 'index'
  },
  start: function(){
    Backbone.history.start({pushState: true});
  },
  initialize: function() {
    this.pictureList = new PictureList();
    this.pictureListView = new PictureListView({collection: this.pictureList});
    $('body').append(this.pictureListView.el);
  },
  index: function(){
    this.pictureList.fetch();
  }
}));