var app = angular.module('trello',['ngRoute', 'dndLists']);

app.config(function($routeProvider){
  $routeProvider

  .when('/', {
    controller: 'BoardController',
    templateUrl: "templates/board.html"
  })
  .otherwise({redirectTo: '/'});
});