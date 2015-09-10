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
  }
};
ko.applyBindings(viewModel, document.getElementById('appContainer'));
