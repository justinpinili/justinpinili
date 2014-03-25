// js/collections/pictureList.js

var PictureList = Backbone.Collection.extend({
  url: 'https://api.getchute.com/v2/albums/aus6kwrg/assets'
  parse: function(response){
    this.pagination = response.pagination;
    this.response = response.response;
    return response.data;
  }
});