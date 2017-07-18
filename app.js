var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    mongoose        = require("mongoose"),
    flash           = require("connect-flash"),
    passport        = require("passport"),
    LocalStrategy   = require("passport-local"),
    methodOverride  = require("method-override"),
    Campground      = require("./models/campground"),
    Comment         = require("./models/comment"),
    User            = require("./models/user"),
    seedDB          = require("./seeds");
 
 
 // REQUIRING ROUTES   
var commentRoutes     = require("./routes/comments"),
    campgroundRoutes  = require("./routes/campgrounds"),
    indexRoutes       = require("./routes/index");
    

    

mongoose.connect("mongodb://localhost/yelp_camp2");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());
// seedDB();   // Seed the database

// PASSPORT CONFIGURATION
app.use(require("express-session")({
  secret: "Holly and Breesy",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
  res.locals.currentUser = req.user;
  res.locals.error = req.flash("error");
  res.locals.success = req.flash("success");
  next();
});

app.use("/", indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);



// Campground.create(
//   {
//     name: "Granite Hill", image: "https://farm8.staticflickr.com/7512/15558076393_8c1d4b9cf8.jpg", description: "You want your criminal associate taken into police custody? We declare just enough so as to not arouse suspicion, so Walt's one time winnings becomes seed money for an investment. If you're committed enough, you can make any story work. I once told a woman I was Kevin Costner, and it worked because I believed it."
    
//   }, function(err, campground){
//     if(err) {
//       console.log(err);
//     } else {
//       console.log("NEWLY CREATED CAMPGROUND");
//       console.log(campground);
//     }
//   });


// var campgrounds = [
//       {name: "Salmon Creek", image: "https://farm6.staticflickr.com/5276/5852493223_cc575044e7.jpg"},
//       {name: "Granite Hill", image: "https://farm8.staticflickr.com/7512/15558076393_8c1d4b9cf8.jpg"},
//       {name: "Napa Valley", image: "https://farm8.staticflickr.com/7405/9318579224_51b9d84c3f.jpg"},
//       {name: "Salmon Creek", image: "https://farm3.staticflickr.com/2457/4003707467_a5edf1fb9e.jpg"},
//       {name: "Granite Hill", image: "https://farm4.staticflickr.com/3832/9603531635_e348167e39.jpg"},
//       {name: "Christopher Creek", image: "https://farm7.staticflickr.com/6195/6094102471_26eb431ec4.jpg"},
//       {name: "Mosquito Trails", image: "https://farm9.staticflickr.com/8192/8140342792_033b929fc7.jpg"}
//     ];






app.listen(process.env.PORT, process.env.IP, function(){
  console.log("yelp-camp server has started!");
});