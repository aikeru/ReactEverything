var viewModel = {
  name: ko.observable(''),
  people: ko.observableArray([
    {Name: "Alice"},
    {Name: "Bob"},
    {Name: "Charles"}
  ]),
  addPerson: function() {
    if(viewModel.name()) {
      viewModel.people.push({Name:viewModel.name()});
      viewModel.name('');
    }
  },
  removePerson: function(person, index) {
    if (confirm('Are you sure you want to remove ' + person.Name + ' they might be gone forever!?')) {
      viewModel.people.splice(index, 1);
    }
  }
};
ko.applyBindings(viewModel, document.getElementById('appContainer'));
