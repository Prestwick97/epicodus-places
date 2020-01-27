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


Place.prototype.info = function() {
  return this.location + " " + this.landmark + " " + this.year;
}

var placeBook = new PlaceBook();
var France = new Place("Paris", "Eifel Tower", "January 2019");
var Germany = new Place("Berlin", "Reichstag", "March 2019");
var England = new Place("London", "Big Ben", "April 2019");
var Italy = new Place("Rome", "Colossem", "May 2019");
placeBook.addPlace(France);
placeBook.addPlace(Germany);
placeBook.addPlace(England);
placeBook.addPlace(Italy);


// User Logic

$(document).ready(function() {
  
  $("#france").click(function() {
    // event.preventDefault(); doesnt toggle, who cares?
  $("#france").text(France.info()).fadeIn();
  });
  $("#germany").click(function() {
  $("#germany").text(Germany.info()).fadeIn();
  });
  $("#england").click(function() {
    $("#england").text(England.info()).fadeIn();
    });
    $("#italy").click(function() {
      $("#italy").text(Italy.info()).fadeIn();
      });



});