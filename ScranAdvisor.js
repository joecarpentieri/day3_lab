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

ScranAdvisor.prototype.newArrayOfRestaurants = function() {
    return this.restaurants.map(restaurant => restaurant.name);
};

ScranAdvisor.prototype.findAllRestaurantsInGlasgow = function() {
    return this.restaurants.filter((arrayObj) => arrayObj.location.town === "Glasgow");
};

// ScranAdvisor.prototype.mostCommonCuisineType = function(array) {
//     return array.filter((cuisine) => (cuisine === this.restaurants.cuisine)).length;
// }
module.exports = ScranAdvisor;