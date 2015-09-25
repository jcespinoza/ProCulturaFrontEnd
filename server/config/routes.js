/**
 * Created by jcespinoza on 6/21/15.
 */
'use strict';
var fs = require('fs');

module.exports = function(app){
    app.get('/partials/*', function(request, response){
        response.render('../../public/app/' + request.params[0]);
    });
    app.get('/resources/*', function(request, response){
        var readable = fs.createReadStream('public/js/L10N/' + request.params[0]);
    	readable.pipe(response);
    });

    app.get('/api/*', function(request, response){
        response.send(404);
    });

    app.get('/*', function(request, response){
        response.render('index');
    });
};