var gulp = require('gulp');
var dust = require('gulp-dust');
var express = require('express');

var fs = require('fs');
var bodyParser = require("body-parser");

gulp.task('dust', function () {
    console.log("dust..");
    gulp.src('public/dust/*.js')
        .pipe(dust())
        .pipe(gulp.dest('public/js'));
});

gulp.task('server', function () {
    console.log("express starting..");
    var app = express();
    app.use(bodyParser.json());

    app.use('/', express.static('public'));

    app.get('/menu', function (request, response) {
        response.sendFile(__dirname + "/data/menu.json");
    });

    app.get('/locations', function (request, response) {
        response.sendFile(__dirname + "/data/locations.json");
    });

    app.get('/contactsList', function (request, response) {
        response.sendFile(__dirname + "/data/contactList.json");
    });

    app.post('/addContact', function (request, response) {
        fs.readFile(__dirname + "/data/contactList.json", 'utf-8', function (err, data) {
            var fileJsonData = JSON.parse(data);
            console.log(fileJsonData);
            var newContact = request.body;
            var max = 0;
            for (var i = 0; i < fileJsonData.contactList.length; i++) {
                if (fileJsonData.contactList[i].id > max) {
                    max = parseInt(fileJsonData.contactList[i].id);
                }
            }
            newContact.id = max + 1;
            fileJsonData.contactList.push(newContact);
            var stringFile = JSON.stringify(fileJsonData);
            fs.writeFile(__dirname + "/data/contactList.json", stringFile, (err) => {
                if (err) throw err;
            });
            response.send(stringFile);
        });
    });

    app.post('/deleteContact', function (request, response) {
        console.log("incoming data=" + JSON.stringify(request.body));
        fs.readFile(__dirname + "/data/contactList.json", 'utf-8', function (err, data) {
            console.log('file data' + data);
            var fileJsonData = JSON.parse(data);
            var deletedContact = request.body;
            var index = -1;
            for (var i = 0; i < fileJsonData.contactList.length; i++) {
                if (fileJsonData.contactList[i].id == deletedContact.id) {
                    index = i;
                }
            }
            console.log("index=" + index);
            if (index >= 0) {
                var newContactsList = fileJsonData.contactList.splice(index, 1);
                var stringFile = JSON.stringify(fileJsonData);
                console.log("after Delete=" + stringFile);
                fs.writeFile(__dirname + "/data/contactList.json", stringFile, (err) => {
                    if (err) throw err;
                });
                response.send(stringFile);
            } else {
                response.send(JSON.stringify(fileJsonData));
            }
        });
    });

    app.get('/getContact', function (request, response) {
        var id = parseInt(request.query.id);
        fs.readFile(__dirname + "/data/contactList.json", 'utf-8', function (err, data) {
            console.log('file data' + data);
            var fileJsonData = JSON.parse(data);
            var foundContact = {};
            for (var i = 0; i < fileJsonData.contactList.length; i++) {
                if (fileJsonData.contactList[i].id == id) {
                    console.log("yyyyyyyyy ", typeof fileJsonData.contactList[i].id, typeof id);
                    foundContact = fileJsonData.contactList[i];
                    console.log(foundContact);
                }
            }
            var stringFile = JSON.stringify(foundContact);
            response.send(stringFile);
        });
        return "success";
    });

    app.post('/searchContact', function (request, response) {
        return "success";
    });

    app.post('/updateContact', function (request, response) {
        console.log("incoming data=" + JSON.stringify(request.body));
        fs.readFile(__dirname + "/data/contactList.json", 'utf-8', function (err, data) {
            console.log('file data' + data);
            var fileJsonData = JSON.parse(data);
            var updatedContact = request.body;
            for (var i = 0; i < fileJsonData.contactList.length; i++) {
                if (fileJsonData.contactList[i].id == updatedContact.id) {
                    console.log(fileJsonData.contactList.length+" ---000000000000---");
                    fileJsonData.contactList[i] = updatedContact;
                    break;
                }
            }
            var stringFile = JSON.stringify(fileJsonData);
            fs.writeFile(__dirname + "/data/contactList.json", stringFile, (err) => {if (err) throw err;});
            response.send(stringFile);
        });
    });
    var serverPort = 3000;
    var server = app.listen(serverPort, function () {
        console.log(`Server started at port ${serverPort}`);
    });
});

gulp.task('default', ['dust', 'server']);