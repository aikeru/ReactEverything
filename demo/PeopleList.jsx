var PeopleList = React.createClass({
  propTypes: {
    people: React.PropTypes.array.isRequired,
    onremoveperson: React.PropTypes.func, //Compatibility with Angular 1.x
    onRemovePerson: React.PropTypes.func
  },
  getDefaultProps: function () {
    return {
      people: []
    };
  },
  removePerson: function(person, personIndex) {
    var removeFunc = this.props.onremoveperson || this.props.onRemovePerson;
    if (removeFunc) {
      removeFunc(person, personIndex);
    }
  },
  render: function () {
    var personItems = this.props.people.map(function (person, i) {
      return React.DOM.li({key: i}, person.Name);
    });

    return <ul>
            {this.props.people.map((person, i) =>
              <li key={i}>{person.Name}
                <button onClick={this.removePerson.bind(this,person,i)}>X</button>
              </li>)
            }
           </ul>;
  }
});