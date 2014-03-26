// js/collections/pictureList.js

var PictureList = Backbone.Collection.extend({
  url: 'https://api.getchute.com/v2/albums/aus6kwrg/assets/',
  parse: function(response){
    this.response = response.response;
    this.pagination = response.pagination;
    return response.data;
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
      $('#container').fadeOut(600, function(){
        $('#container').remove();
        $('body').append(SurfWallApp.pictureListView.el);
        $('#container').hide().appendTo('body').fadeIn(600);
      });
    });
  }
});