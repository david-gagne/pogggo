const express           = require('express'), 
      mongoose          = require('mongoose'), 
      User              = require('./models/user');


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
    response.send("Sent signup form!...Not really");
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
app.post("/signup", function (request, response) {
    response.send("Sent login form!...Not really");
});



app.listen(3000, function () {
    console.log("Server started on port 3000!");
});