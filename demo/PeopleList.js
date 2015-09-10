"use strict";

var PeopleList = React.createClass({
  displayName: "PeopleList",

  propTypes: {
    people: React.PropTypes.array.isRequired,
    onremoveperson: React.PropTypes.func, //Compatibility with Angular 1.x
    onRemovePerson: React.PropTypes.func
  },
  getDefaultProps: function getDefaultProps() {
    return {
      people: []
    };
  },
  removePerson: function removePerson(person, personIndex) {
    var removeFunc = this.props.onremoveperson || this.props.onRemovePerson;
    if (removeFunc) {
      removeFunc(person, personIndex);
    }
  },
  render: function render() {
    var _this = this;

    var personItems = this.props.people.map(function (person, i) {
      return React.DOM.li({ key: i }, person.Name);
    });

    return React.createElement(
      "ul",
      null,
      this.props.people.map(function (person, i) {
        return React.createElement(
          "li",
          { key: i },
          person.Name,
          React.createElement(
            "button",
            { onClick: _this.removePerson.bind(_this, person, i) },
            "X"
          )
        );
      })
    );
  }
});