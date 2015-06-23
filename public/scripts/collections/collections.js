var DishCollection = Backbone.Collection.extend({
	model: Dish,
	url: '/dishes'
});

var dishes = new DishCollection();
dishes.fetch();