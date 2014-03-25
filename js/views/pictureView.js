// js/views/pictureView.js

var PictureView = Backbone.View.extend({
  className: 'item',
  template: _.template("<h3><%= username %></h3><img class='avatar' src='<%= user.avatar %>'/> - <%= caption %> <img class='photo' src='<%= source.source_url %>'/> tags: <%_.each(tags, function(i) { %> <%= i %> <% }); %>" ),
  render: function(){
    var attributes = this.model.attributes;
    this.$el.html(this.template(attributes));
    return this;
  }
});