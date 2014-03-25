var $container = $('#container');

$(document).ready(function() {
  $(function(){ SurfWallApp.start() });

  SurfWallApp.pictureList.fetch().done(function(){
    SurfWallApp.pictureListView.render();
    imagesLoaded( '#container', function() {
      $container.masonry();
    });
  });
});