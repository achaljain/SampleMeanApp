'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MovieViewCtrl
 * @description
 * # MovieViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MovieViewCtrl', function ($scope, $routeParams, Movie, $location){
    $scope.viewMovie = true;
    $scope.movie = Movie.one($routeParams.id).get().$object;
    $scope.comments = [];
    Movie.one($routeParams.id).customGET("comments").then(function(data){
      for(var i=0; i < data.length; ++i){
        $scope.comments.push(data[i]);
      }
    });
    $scope.comment = {};
    $scope.comment.author = "User"
    $scope.addComment = function(){
      Movie.one($routeParams.id).customPOST($scope.comment,"comments");
    }
  });
