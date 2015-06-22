/**
 * Created by jcespinoza on 6/21/15.
 */
'use strict';

var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');
module.exports = {
    development: {
        rootPath: rootPath,
        port: process.env.PORT || 8090
    },
    production: {
        rootPath: rootPath,
        port: process.env.PORT || 80
    }
};