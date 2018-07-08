const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert'); // This is a node package for unit testing.

// // Connection URL
// const url = 'mongodb://localhost:27017';

// // Database Name
// const dbName = 'pogggo';

// // Use connect method to connect to the server
// MongoClient.connect(url, function (err, client) {
//     assert.equal(null, err);
//     console.log("Connected successfully to server");

//     const db = client.db(dbName);

//     // Insert a single document into the users collection.
//     db.collection('users').insertOne({
//         "first_name": "Jonathan",
//         "last_name": "Smith",
//         "email": "jsmith@ufl.edu"
//     }, function (err, r) {
//         assert.equal(null, err);
//         assert.equal(1, r.insertedCount);

//         client.close();
//     });
// });

app.use(express.static('public'));
app.use(express.static('views'));

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