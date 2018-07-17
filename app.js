const express           = require('express'), 
      mongoose          = require('mongoose');



// Connect to MongoDB
mongoose.connect("mongodb://localhost/pogggo");


// Define user model:
    // This is the form that documents in the MongoDB collection will take   
let User = mongoose.model("User", new mongoose.Schema({
    name: { type: String, required: true},
    email: { type: String, required: true, unique: true},
    username: { type: String, required: true, unique: true},
    password: { type: String, required: true}
}));


// Create a new Express application
const app = express();


// CONFIGURATION
app.use(express.static('public'));
app.use(express.static('views'));
app.use(require('body-parser').urlencoded({
    extended: false
}));

// SHOW LANDING PAGE
app.get("/", function (request, response) {
    response.sendFile('index.html');
});

// SHOW LIBRARIES PAGE
app.get("/libraries", function (request, response) {

    let options = {
        root: 'views',
        dotfiles: 'ignore'
    };

    response.sendFile('libraries.html', options, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Sent libraries page!");
        }
    });

});

// SHOW LIBRARY OF A SPECIFIC USER
app.get("/libraries/:id", function (request, response) {

    let options = {
        root: 'views',
        dotfiles: 'ignore'
    };

    response.sendFile('library.html', options, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Sent library page!");
        }
    });

});


// SHOW SIGN UP FORM
app.get("/signup", function (request, response) {

    let options = {
        root: 'views',
        dotfiles: 'ignore'
    };

    response.sendFile('signup.html', options, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Sent signup page!");
        }
    });

});

// SIGN UP LOGIC: What to do after user signs up.
app.post("/signup", function (request, response) {
    let options = {
        root: 'views',
        dotfiles: 'ignore'
    };

    // Create a user
    let user = new User(request.body);

    user.save(function(err) {
        if (err) {
            let error = "Something bad happened! Please try again.";
            
            if (err.code === 11000) {
                error = "That email is already in use. Please try another.";
            }

            return response.sendFile("/signup.html", options, function (err) { 
                err = error;
                console.log(error); // Test error message
            });
        }

        response.send("WELCOME TO YOUR POGGGO MUSIC LIBRARY!");
        response.redirect("/libraries");
    });
});


// SHOW LOG IN FORM
app.get("/login", function (request, response) {

    let options = {
        root: 'views',
        dotfiles: 'ignore'
    };

    response.sendFile('login.html', options, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Sent login page!");
        }
    });

});


// LOG IN LOGIC: What to do after user logs in.
app.post("/login", function (request, response) {
    User.findOne({ email: request.body.email }, function (err, user) {
        if (err || !user || request.body.password !== user.password) {
            response.json(request.body);
        }

        response.send("SUCCESS");
    });    
});



app.listen(3000, function () {
    console.log("Server started on port 3000!");
});