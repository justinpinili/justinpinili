var pictureList = new PictureList();
var pictureListView;
var container = document.querySelector('#container');
var msnry;

$(document).ready(function() {
  $.getJSON("https://api.getchute.com/v2/albums/aus6kwrg/assets/").done(function(results) {
    for (var index = 0; index < results.data.length; ++index) {
      pictureList.add(new Picture({data: results.data[index]}));
    }

    pictureListView = new PictureListView({collection: pictureList});
    pictureListView.render();

    $('body').append(pictureListView.el);
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