var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
       name: "Salmon Creek", image: "https://farm6.staticflickr.com/5276/5852493223_cc575044e7.jpg",
       description: "My partner was about to get himself shot. I intervened. He was angry because those two dealers of yours had just murdered an eleven year-old boy. Then again, maybe he thought it was you who gave the order"
    },
    {
      name: "Napa Valley", image: "https://farm8.staticflickr.com/7405/9318579224_51b9d84c3f.jpg", description: "This is glass grade. I mean, you got... Jesus, you got crystals in here 2 inches, 3 inches long. This is pure glass. You're a damn artist! This is art, Mr. White! Yeah, that's the thing, y'know? Your scumbag brother-in-law took my rainy day fund. Oh yeah. And tell that douche bag brother-in-law of yours to go towards the light."
      
    },
    {
      name: "Christopher Creek", image: "https://farm7.staticflickr.com/6195/6094102471_26eb431ec4.jpg", description: "What? Come on! Man, you're smart. You made poison out of beans, yo. Look, we got, we got an entire lab right here. Alright? How about you pick some of these chemicals and mix up some rocket fuel? That way you could just send up a signal flare. Or you make some kind of robot to get us help, or a homing device, or build a new battery, or... wait. No. What if we just take some stuff off of the RV and build it into something completely different? You know, like a... Like a dune buggy."
      
    }
  ];

function seedDB() {
  //Remove all campgrounds
  Campground.remove({}, function(err){
  if(err) {
    console.log(err);
  } else {
    console.log("removed campgrounds");
    // Add some campgrounds
    data.forEach(function(seed){
      Campground.create(seed, function(err, campground){
        if(err) {
          console.log(err);
        } else {
          console.log("Added a campground");
          
          //create a comment
          Comment.create(
            {
              text: "This place was great, but no internet",
              author: "Heisenberg"
              
            }, function(err, comment){
              if(err){
                console.log(err);
              } else {
                campground.comments.push(comment);
                campground.save();
                console.log("Created comment");
              }
            });
        }
      });
    });
  }
});



}


module.exports = seedDB;