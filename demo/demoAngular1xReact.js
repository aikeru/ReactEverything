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

});

app.value("PeopleList", PeopleList);

//We could define it without JSX like so...
//var PeopleList = React.createClass({...})
//app.value("PeopleList", React.createClass({
//
//  propTypes: {
//    people: React.PropTypes.array.isRequired
//  },
//  getDefaultProps: function () {
//    return {
//      people: []
//    };
//  },
//
//  render: function () {
//    var personItems = this.props.people.map(function (person, i) {
//      return React.DOM.li({key: i}, person.Name);
//    });
//
//    return React.DOM.ul(null, personItems);
//  }
//}));

app.directive('peopleList', function (reactDirective) {
  return reactDirective('PeopleList');
});