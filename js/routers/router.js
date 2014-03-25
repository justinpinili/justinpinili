var SurfWallApp = new (Backbone.Router.extend({
  routes: {
    "": "index"
  },
  initialize: function() {
    this.pictureList = new PictureList();
    this.pictureListView = new PictureListView({collection: this.pictureList});
    this.pictureListView.render();
    $('body').append(this.todosView.el);
  },
  index: function(){
    this.pictureList.fetch();
  }
}));