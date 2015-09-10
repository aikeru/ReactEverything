function AppComponent() {
  this.componentProps = {
    people: [{Name:"Alice"},{Name:"Bob"}, {Name: "Charles"}]
  };
  this.component = PeopleList;
  this.name = "";
}
AppComponent.prototype.addPerson = function addPerson(name) {
  if(name) {
    var people = this.componentProps.people.concat([{Name:name}]);
    this.componentProps = {
      people: people
    };
    this.name = "";
  }
};

AppComponent.annotations = [
  new angular.ComponentAnnotation({
    selector: 'my-app'
  }),
  new angular.ViewAnnotation({
    template: `
      <h1>Angular 2 with React</h1>
      <p>This is a react component showing a list of people driven by angular 2:</p>
      <reactcomponent [props]="componentProps" [component]="component"></reactcomponent>
      <p>This is an angular 2 form for adding more people:</p>
      <div>
        <input type="text" (input)="name = $event.target.value" [value]="name" /><button (click)="addPerson(name)">Add Person</button>
        <p>{{name}}</p>
      </div>
    `,
    directives: [ReactComponent]
  })
];
document.addEventListener('DOMContentLoaded', function() {
  angular.bootstrap(AppComponent);
});