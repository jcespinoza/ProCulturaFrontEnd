/**
 * Created by jcespinoza on 6/21/15.
 */
'use strict';

module.exports = function(app){
    app.get('/partials/*', function(request, response){
        response.render('../../public/app/'+ params[0] +'/view/' + params[1]);
    });

    app.get('/api/*', function(request, response){
        response.send(404);
    });

    app.get('/*', function(request, response){
        response.render('index');
    });
};