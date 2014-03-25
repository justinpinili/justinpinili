var pictureList = new PictureList();
var pictureListView;
var container = document.querySelector('#container');
var msnry;
var count = 0;

$(document).ready(function() {
  $(function(){ SurfWallApp.start() });

  SurfWallApp.pictureList.fetch().done(function(){
    SurfWallApp.pictureListView.render();
  });

  $('<img />').load( function(){
    imagesLoaded( container, function() {
      msnry= new Masonry( container, {
      // options
      columnWidth: 250,
      itemSelector: '.item'
      });
    });
  });
});