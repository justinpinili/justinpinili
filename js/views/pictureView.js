// js/views/pictureView.js

var PictureView = Backbone.View.extend({
  className: 'item',
  template: _.template("<h3><%= data.username %></h3><img class='avatar' src='<%= data.user.avatar %>'/> - <%= data.caption %> <img class='photo' src='<%= data.source.source_url %>'/> tags: <%_.each(data.tags, function(i) { %> <%= i %> <% }); %>" ),
  render: function(){
    var attributes = this.model.toJSON();
    this.$el.html(this.template(attributes));
    return this;
  }
});