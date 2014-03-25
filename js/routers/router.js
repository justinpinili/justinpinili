var SurfWallApp = new (Backbone.Router.extend({
  routes: {
    '': 'index'
  },
  start: function(){
    Backbone.history.start({pushState: true});
  },
  initialize: function() {
    this.pictureList = new PictureList();
    this.pictureList.fetch();
    this.pictureListView = new PictureListView({collection: this.pictureList});
    this.pictureListView.render();
    $('body').append(this.pictureListView.el);
  },
  index: function(){
    this.pictureList.fetch();
  }
}));