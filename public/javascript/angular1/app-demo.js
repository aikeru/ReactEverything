var app = angular.module('app', ['react']);

app.controller('mainCtrl', function ($scope) {

  $scope.peopleArr = [
    {Name:"Alice"},
    {Name:"Bob"},
    {Name:"Charles"},
    {Name:"Donald"}
  ];

  $scope.addPerson = function() {
    if($scope.name) {
      $scope.peopleArr.push({Name:$scope.name});
      $scope.name = "";
    }
  };
  $scope.removePerson = function(person, index) {
    if(confirm('Are you sure you want to remove ' + person.Name + ' they might be gone forever!?')) {
      $scope.peopleArr.splice(index, 1);
    }
  };
});

app.value("PeopleList", PeopleList);

app.directive('peopleList', function (reactDirective) {
  return reactDirective('PeopleList');
});