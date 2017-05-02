(function(){
var app = angular.module('wordPicker', []);
// $scope.words=[];
  // function pickWord () {
app.controller('controller', function($scope) {

$scope.words = [{text:"Gimme"}, {text: "Mine"}, {text:"Dinosaur"}, {text:"Owie"}, {text:"Cookie"}]



$scope.displayWord = function(array) {
  $scope.words = [{text:"Gimme"}, {text: "Mine"}, {text:"Dinosaur"}, {text:"Owie"}, {text:"Cookie"}]
  $scope.array = []
  $scope.array.push($scope.words[Math.floor(Math.random()*5)])
  console.log("hi");
}


});


})();
