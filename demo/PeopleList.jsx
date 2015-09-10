var PeopleList = React.createClass({
  propTypes: {
    people: React.PropTypes.array.isRequired
  },
  getDefaultProps: function () {
    return {
      people: []
    };
  },
  render: function () {
    var personItems = this.props.people.map(function (person, i) {
      return React.DOM.li({key: i}, person.Name);
    });

    return <ul>
            {this.props.people.map((person, i) =>
              <li key={i}>{person.Name}</li>)
            }
           </ul>;
  }
});