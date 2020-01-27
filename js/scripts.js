// Business Logic for Place Book
function PlaceBook(){
  this.places = [];
  this.placeId = 0;
}

PlaceBook.prototype.addPlace = function(place) {
  place.id = this.assignId();
  this.places.push(place);
}
PlaceBook.prototype.assignId = function() {
  this.placeId +=1;
  return this.placeId;
}
PlaceBook.prototype.findPlace =function(id) {
  for (var i=0; i< this.places.length; i++){
    if (this.places[i]) {
    if (this.places[i].id == id) {
      return this.places[i];
      }
    }
  };
  return false;
}
PlaceBook.prototype.deletePlace = function(id) {
  for (var i=0; i< this.places.length; i++) {
    if (this.places[i]) {
      if (this.places[i].id == id) {
        delete this.places[i];
        return true;
      }
    }
  };
  return false;
}
// Business Logic for Places
function Place(location, landmark, year) {
  this.location = location;
  this.landmark = landmark;
  this.year = year;
}
Place.prototype.info =function() {
  return this.location + " " + this.landmark + " " + this.year;
}