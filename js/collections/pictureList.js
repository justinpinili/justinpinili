// js/collections/pictureList.js

var PictureList = Backbone.Collection.extend({
  url: 'https://api.getchute.com/v2/albums/aus6kwrg/assets/',
  parse: function(response){
    this.response = response.response;
    this.pagination = response.pagination;
    return response.data;
  }
});