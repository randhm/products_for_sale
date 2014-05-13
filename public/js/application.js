var salesApp = salesApp || {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {}
};

salesApp.Models.Product = Backbone.Model.extend({});
salesApp.Models.MarketingText = Backbone.Model.extend({});
salesApp.Models.Image = Backbone.Model.extend({});
salesApp.Models.Feature = Backbone.Model.extend({});

salesApp.Collections.ProductCollection = Backbone.Collection.extend({
  model: salesApp.Models.Product,
  url: '/api/products'
});

$(document).ready(function() {
  dog = new salesApp.Collections.ProductCollection();
  dog.fetch({success: function(){
      console.log('hello');
      console.log(dog);
    },
    error: function(collection, response, options){
      console.log(collection);
      console.log(response);
      console.log(options);
      console.log('ohh sheeet');
    }
  });
});
