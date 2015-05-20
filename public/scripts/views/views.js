//$(function(){
//var ShowDishView = Backbone.View.extend({
//	el: "#contentArea",
//	template: _.template($("#showDish").html()),
//	
//	render: function(){
//		this.$el.html(this.template({dish: this.model.toJSON()}));
//		return this;
//	}
//});
//
//
//var DinerView = Backbone.View.extend({
//	el: "div#contentArea",
//	initialize: function(){
//		this.listenTo(this.collection, "sync remove", this.render);
//		
//	},
//
//	render:function(){
//		diner.fetch({
//			success: function(model, response){
//				response.forEach(function(dish){
//					var ul = document.getElementById("allDishes");
//					var li = document.createElement('li');
//					li.innerText = dish.name;
//					li.innerHTML = dish.image_url;
//					li.innerText = dish.price;
//					ul.appendChild(li);
//					
//				});
//			}
//			
//			
//		});
//
//		return this;
//	}
//});

//});

$(document).ready(function() {
	var ShowDishView = Backbone.View.extend({
		tagName: 'div',
		template: _.template($("#dishTemplate").html()),
		events: {
			"click button#deleteButton": "deleteDish",
			"click button#editButton": "editDish",
			"click button#updateButton": "updateDish",
			
		},
		

		updateDish: function(){
			var newName = this.$("#newDishName" + this.model.id).val();
			var newImage = this.$("#newDishImage" + this.model.id).val();
			var newPrice = this.$("#newDishPrice" + this.model.id).val();
			this.model.set({name: newName, image_url: newImage, price: newPrice});
			this.model.save();
		},

		editDish: function(){
			this.$("dish").hide();
			this.$(".editForm").show();	
		},

		deleteDish: function() {
			this.model.destroy();
		},

		render: function(){
			this.$el.html(this.template({dishes: this.model.toJSON()}));
			return this;
		}
	});



	var DishView = Backbone.View.extend({
		el: ".dishesList",
		initialize: function(){
			this.listenTo(this.collection,"sync remove", this.render);
		},

		render: function(){
			var dishes = this.$el;
			dishes.html("");
			this.collection.each(function(dish) {
				dishes.append(new ShowDishView({model: dish}).render().$el);
			});

			return this;
		}
	});

	var CreateDishView = Backbone.View.extend({
		el: "#addDishForm",
		events: {"click button#addDish": "createDish"},
		createDish: function(){
			var nameField = this.$("#newDishName");
  			var imageField = this.$("#newDishImage");
  			var priceField = this.$("#newDishPrice")

			var name = nameField.val();
			var image = imageField.val();
			var price = priceField.val();

			this.collection.create({name: name, image_url: image, price: price});

			nameField("");
			imageField("");
			priceField("");
		}
	});


	new DishView({collection: dishes});
	new CreateDishView({collection: dishes});

});