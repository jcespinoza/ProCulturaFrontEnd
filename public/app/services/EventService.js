angular.module('app').service('EventService', ['$http', 'HostFactory', function($http, HostFactory){

    events = [{
        eventId: 1,
        title: "National Artists Concert",
        summary: "This is an event where every National Artist come to a meeting and perform a song ",
        startDate: "18/11/2015",
        imgUrl: "http://farm6.staticflickr.com/5802/20967738616_f315d2de98_m.jpg",
        location:"SPS",
        endDate: "18/11/5",
        status: "InProgress",
        price: 0


    },
    {
        eventId: 2,
        title: "Cultural Meeting at the Museum",
        subject: "Art Event",
        startDate: "2013-04-10T14:57:00",
        imgUrl:"http://farm6.staticflickr.com/5824/20769434970_6db7a2fc87_m.jpg",
        location:"SPS",
        endDate: "2013-04-10T14:57:00",
        status: "Completed",
        price: 5,
        description: 'This is a meeting for the art lovers who want to watch boring pieces of art'

    },
    {
        eventId: 3,
        title: "Global Hackaton",
        summary: "This is an event for people who want to developed apps in a group in less than 24 hours",
        startDate: "10/11/2015",
        imgUrl:"http://farm6.staticflickr.com/5820/20785030910_3875995dee_m.jpg",
        location:"SPS",
        endDate: "10/11/2015",
        status: "InProgress",
        price: 0


    },
    {
        eventId: 4,
        subject: "Computer Science Event",
        startDate: "2013-04-10T14:57:00",
        imgUrl:"http://farm6.staticflickr.com/5820/20785030910_3875995dee_m.jpg",
        location:"SPS",
        endDate: "2013-04-10T14:57:00",
        status: "InProgress",
        price: 0,
        description: 'This is an event for people who want to developed apps in a group in less than 24 hours'

    }

    ];

    var baseUrl = HostFactory.serverName ;
    var eventFactory = {};

    eventFactory.createEvent = function(event){
        event.eventId = 4;
        event.imgUrl = '';
        events.push(event);
        return $http.post(baseUrl + '/api/createEvent', event);
    };

    eventFactory.getEvents = function(){
        return events;
        //return $http.get(HostFactory.serverName + '/api/events');

    };


    return eventFactory;
}]);
