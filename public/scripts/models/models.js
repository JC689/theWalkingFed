//var Dish = Backbone.Model.extend({
//	urlRoot: '/dishes',
//	initialize: function(){
//		console.log("A new dish was made");
//		this.on("change", function(){
//			console.log("make that change");
//		});
//	}
//});

var Dish = Backbone.Model.extend({
	initialize: function(){
		console.log("Create a new Dish");
	}
});