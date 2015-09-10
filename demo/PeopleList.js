"use strict";

var PeopleList = React.createClass({
  displayName: "PeopleList",

  propTypes: {
    people: React.PropTypes.array.isRequired
  },
  getDefaultProps: function getDefaultProps() {
    return {
      people: []
    };
  },
  render: function render() {
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
          person.Name
        );
      })
    );
  }
});