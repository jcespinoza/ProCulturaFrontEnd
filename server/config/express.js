/**
 * Created by jcespinoza on 6/21/15.
 **/

'use strict';

var express = require('express'),
    bodyParser = require('body-parser'),
    stylus = require('stylus'),
    cookieParser = require('cookie-parser'),
    session = require('express-session')
    ;

module.exports = function(app, config){
    function compileStylus(nameString, path){
        return stylus(nameString).set("filename", path);
    }

    app.set("views", config.rootPath + '/server/views');
    app.set("view engine", "jade");

    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(session({secret: 'ola ke ase', resave: true, saveUninitialized: true}));
    app.use(stylus.middleware(
        {
            src: config.rootPath + '/public', //In case views are not served check this line
            compile: compileStylus
        }
    ));

    app.use(express.static(config.rootPath + '/public'));
};