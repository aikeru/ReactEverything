///<reference path="../typescript/jquery.d.ts" />
///<reference path="../typescript/kendo.all.d.ts" />

//declare var PeopleList : any;
declare var React : any;
declare var PeopleList : any; //comes from PeopleList.jsx > PeopleList.js

//We could define it manually in TS like so...
//var PeopleList = React.createClass({
//    displayName: "PeopleList",
//    getInitialState: function getInitialState() {
//        return {};
//    },
//    render: function render() {
//        return React.createElement("ul", null,
//            this.props.people.map(function(p) {
//              return React.createElement("li", null, p.Name)
//            })
//        );
//    }
//});

module KendoMVVMReact {
    export class KendoMVVMReactView {
        viewModel: any;
        constructor() {
            this.viewModel = new KendoMVVMReactViewModel();
            kendo.bind($('#appContainer'), this.viewModel);
        }
    }
    export class KendoMVVMReactViewModel extends kendo.data.ObservableObject {
        people:any;
        name:string = "";
        peopleList:any;
        constructor() {
            super();
            super.init(this);
            this.set('people', new kendo.data.ObservableArray([
                {Name: "Bob"},
                {Name: "Alice"},
                {Name: "Mark"},
                {Name: "Joe"}
            ]));
            this.set('peopleList', new kendo.data.ObservableObject({
                'component': PeopleList,
                'props': { 'people': this.get('people') }
            }));
        }

        addPerson() {
            if(this.get('name')) {
                this.people.push({Name: this.get('name')});
            }
            this.set('peopleList', { 'component': PeopleList, 'props': { 'people': this.get('people') } });
            this.set('name', '');
        }
    }

}

var view : any;
$(function() {
    view = new KendoMVVMReact.KendoMVVMReactView();
});
