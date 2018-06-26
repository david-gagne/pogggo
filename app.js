const express = require('express');
const app = express();
const mongoose = require('mongoose');

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

app.get("/mongoose", function (request, response) {

    let options = {
        root: 'views',
        dotfiles: 'ignore'
    };

    response.sendFile('db_test.html', options, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Sent db_test page!");
        }
    });

});

// Mongoose
mongoose.connect('mongodb://localhost/test');

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
});

let kittySchema = mongoose.Schema({
    name: String
});

// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function () {
    let greeting = this.name ?
        "Meow name is " + this.name :
        "I don't have a name";
    console.log(greeting);
}

let Kitten = mongoose.model('Kitten', kittySchema);

let fluffy = new Kitten({
    name: 'fluffy'
});
fluffy.speak(); // "Meow name is fluffy"

let silence = new Kitten({
    name: 'Silence'
});
console.log(silence.name); // 'Silence'

fluffy.save(function (err, fluffy) {
    if (err) return console.error(err);
    fluffy.speak();
});

Kitten.find(function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
});

app.listen(3000, function () {
    console.log("Server started on port 3000!");
});