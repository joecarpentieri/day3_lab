const ScranAdvisor = function(restaurants){
    this.restaurants = restaurants;
}

// Add methods to prototype

ScranAdvisor.prototype.countRestaurants = function() {
    return this.restaurants.length;
};

ScranAdvisor.prototype.findRestaurantByName = function(nameOfRestaurant) {
    return this.restaurants.find(arrayObj => arrayObj.name === nameOfRestaurant);
};

ScranAdvisor.prototype.newArrayOfRestaurants = function(names) {
    return this.restaurants.map(names.name);
};

// ScranAdvisor.prototype.findAllRestaurantNames = this.restaurants.map((callback) => callback());

module.exports = ScranAdvisor;