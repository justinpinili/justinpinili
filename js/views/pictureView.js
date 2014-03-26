// js/views/pictureView.js

var PictureView = Backbone.View.extend({
  className: 'item',
  template: _.template("<a  id='<%= id %>' class='pic' href='#picture/<%= id %>'> <img class='photo' src='<%= source.source_url %>'/> </a> " ),
  render: function(){
    var attributes = this.model.attributes;
    this.$el.html(this.template(attributes));
    return this;
  }
});

var PictureViewWithInformation = Backbone.View.extend({
  className: 'itemWithInformation',
  templateWithInformation: _.template("<h3><%= username %></h3><img class='avatar' src='<%= user.avatar %>'/> <br /> caption: <%= caption %> <br /> <img class='photoWithInformation' src='<%= source.source_url %>'/> tags: <%_.each(tags, function(i) { %> <%= i %> <% }); %> <a href=''> <br /> Back to Home </a>"),
  renderWithInformation: function(){
    var attributes = this.model.attributes;
    this.$el.html(this.templateWithInformation(attributes));
    return this;
  }
});