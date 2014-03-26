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
  templateWithInformation: _.template("<img class='photoWithInformation' align='left' src='<%= source.source_url %>'/> <br /> <img class='avatar' src='<%= user.avatar %>'/> <h3><%= username %></h3> caption: <%= caption %> <br /> <br /> tags: <%_.each(tags, function(i) { %> <%= i %> <% }); %> <br /> <br /> via: <a href='<%= source.import_url%>'><%= source.service %></a> <br /> <br /> <a href=''> Back to Surf Wall </a>"),
  renderWithInformation: function(){
    var attributes = this.model.attributes;
    this.$el.html(this.templateWithInformation(attributes));
    return this;
  }
});