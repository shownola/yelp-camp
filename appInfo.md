#YELPCAMP
* Add Landing Page
* Add Campground page that lists all campgrounds
* 
Each CAmpground has:
* Name
* Image
* 
mkdir yelp-camp
npm init - go through questions
npm install express ejs --save
touch app.js
# Make initial routes in the app.js file
# Make views templates
* touch views/campgrounds.ejs and enter the template to show all campgrounds
* 
# Layout and Basic Styling
* Create header and footer
* Add Bootstrap
* 
# Creating New Campgrounds
* Setup new campground POST route
* Add in body-parser
* Setup route to show form
* Add basic unstyled form
* 
# Style the campgrounds page
* Add a better header/title
* Make campgrounds display on a grid
* 
# Style the Navbar and Form
* Add a navbar to all templates
* Style the new campground form
* 
# Add Mongoose for Data Persistence
* Install and configure mongoose
* Setup campground model
* Use campground model inside of our routes
* 
# Show Page
* Review the RESTful routes
* Add description to our campground model
* Show db.collection.drop()
* Add a show route/template
* 
# 7 Restful Routes:
Index, New, Show, Edit, Update, Destroy

# CRUD
* Create, Read, Update, Destroy
* 
# Associations
* one:one, one:many, many:many

# Module Exports
* Introduce module.exports
* Move our models into seperate files
* 
# Refactor Mongoose Code
* Create a models directory
* Use module.exports
* Require everything correctly!
* 
# Add Seeds File
* Add a seed.js file
* Run the seeds file every time the server starts
* 
# Add the Comment Model
* Fix the errors
* Display comments on campground show page
* 
# Comment New/Create
* Discuss nested Routes
* Add the comment new and create routes
* Add the new comment form
* 
# Style Show Page
* Add sidebar to the show page
* Display comments nicely
* 
# Finish Styling the Show Page
* Add public directory
* Add custom stylesheet
* 
## Auth Pt 1 - Add User Model
* Install all packages needed for auth
* Define User Model
# Install the packages needed for Authentication:
* passport
* passport-local
* passport-local-mongoose
* express-session
* i.e.  npm install passport passport-local passport-local-mongoose express-session --save
* 
## Auth Pt 2 - Register
* Configure Passport
* Add register routes
* Add register template
* 
## Auth Part 3 - Login 
* Add Login routes
* Add login template
* 
## Auth Pt 4 - Logout/Navbar
* Add logout route
* Prevent user from adding a comment if not signed in
* Add links to navbar
* Show/hide auth links correctly
* 
Auth Pt 5 - Show/Hide Links
* Show/hide auth links in navbar correctly
* 
## REfactor the Routes
* Use Express router to reorganize all routes
* 
## Users + Comments
* Associate users and comments
* Save author's name to a comment automatically
* 
## Users + Campgrounds
* Prevent an unauthenticated user from creating a campground
* Save username+id to newly created campground
* 
# Editing Campgrounds
* Add Method-Override
* Add Edit Route for Campgrounds
* Add Link to Edit Page
* Add Update Route
* Fix $set problem
* 
# Deleting Campgrounds
* Add Destroy Route
* Add Delete Button
* 
# Authorization
* User can only edit their own campgrounds
* User can only delete his/her own campgrounds
* Hide/Show edit and delete buttons
* 
# Editing Comments
* Add Edit Route for comments
* Add Edit buttons
* Add Update Route
* 
nested routes:
/campgrounds/:id/edit
/campgrounds/:id/comments/:comment_id/edit
* 

# Deleting Comments
* Add Destroy route
* Add Delete Button
* 
## Authorization of Comments
* User can only edit his/her comments
* User can only delete his/her comments
* Hide/Show edit and delete buttons
* Refactor Middleware
* 
# Adding Flash!
* Install and configure connect-flash
* Add bootstrap alerts to header
* 
# Git vs. Github
* Difference but related
* Using git for verisioning or drafts
* If you are working from within your own terminal/command line you would need to install git
*
# Git Basics
* Git init
* git add
* git commit

#Git Checkout
* git log
* git checkout
* 



