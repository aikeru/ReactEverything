import {Component,View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import ReactComponent from './ReactComponent.js';

@Component({selector: 'app-demo'})
@View({
    template: `
      <h1>Angular 2 with React</h1>
      <p>This is a react component showing a list of people driven by angular 2:</p>
      <react-component [props]="{
        onRemovePerson: removePerson,
        people: people
      }" [component]="PeopleList"></react-component>
      <p>This is an angular 2 form for adding more people:</p>
      <div>
        <input type="text" [(ngModel)]="personName" />
        <button (click)="addPerson()">Add Person</button>
      </div>
    `,
    directives: [ReactComponent]
})
export default class App {
    constructor() {
        this.people = [
            { Name: "Alice" },
            { Name: "Bob" },
            { Name: "Carl" }
        ];
        this.personName = '';
        this.PeopleList = window.PeopleList;
        this.removePerson = this.removePerson.bind(this);
    }

    addPerson() {
        console.log('addPerson',this.personName);
        var peopleArr = this.people.slice();
        peopleArr.push({
            Name: this.personName
        });
        this.people = peopleArr;
    }

    removePerson(person, index) {
        console.log('onRemovePerson', person,index);
        if(confirm('Are you sure you want to remove ' + person.Name + ' they might be gone forever!?')) {
            var peopleArr = this.people.slice();
            peopleArr.splice(index, 1);
            this.people = peopleArr;
        }
    }
}

bootstrap(App).then(
  success => console.log('Angular 2 Demo Running ...'),
    error => console.log(error)
);