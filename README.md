# Justin Pinili's Surf Wall

[http://justinpinili.github.io](http://justinpinili.github.io)

## Implementation

[Chute API](http://www.getchute.com/developers/reference/chute-api/v2/)
[Backbone.js](http://backbonejs.org/)
[Underscore.js](http://underscorejs.org/)
[jQuery](http://jquery.com/)
[Masonry](http://masonry.desandro.com/)
[imagesLoaded](http://imagesloaded.desandro.com/)

I was assigned this project on Friday, March 21, 2014. I've had experience with JavaScript, jQuery before but this was my first time really digging into Backbone.js as well as using Underscore.js (I've used mustache as a template before), Masonry, and imagesLoaded. It was a lot of fun putting this together and I can already see the amazing benifits of using Backbone.js and I hope I've displayed enough to show you that I can ramp up really quickly and understand fundamentals and adapt.

### Noteable Issues

Nothing renders in Internet Explorer. I believe it is due to running into cross-domain issues with ajax requests. I was doing some research and found out that IE tends to be a little weird with security, and I did not have enough time to debug this.

If a hard-refresh happens, or if you click the source link (it happened to be instagram for all 5 pictures) navigate to that page, and click the back button, the page renders the .item div that contains the instructions, fades it out, and then displays the updated pictureList collection containing the specific picture with the ID listed in the URL. I wasn't able to figure this out but it looks like my code, as of right now, relies on the route.js initialize the page first, because that is the only notable place where I fade in the .item div.

I was not able to get into pushState because whenever I tried to initiate pushState when I started my Backbone history, my routes were not working correctly.

Please let me know if you have any questions.
I look forward to hearing from you soon.