function reRender() {
    SurfWallApp.pictureList.fetch().done(function(){
    $('.itemWithInformation').remove();
    SurfWallApp.pictureListView.render();
  });
}

$(document).ready(function() {
  $(function(){ SurfWallApp.start() });

  $('body').on('click', '.pic', function(){
    var pictureID = "picture/" + $(this).attr('id');
    SurfWallApp.navigate( pictureID, { trigger: true });
  });
});