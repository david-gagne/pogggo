const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(express.static('public'));
app.use(express.static('views'));

// body-parser
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", function (request, response) {
    response.sendFile('index.html');
});

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

app.post("/signup", function (request, response) {

});

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


app.listen(3000, function () {
    console.log("Server started on port 3000!");
});