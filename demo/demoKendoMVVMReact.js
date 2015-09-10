///<reference path="../typescript/jquery.d.ts" />
///<reference path="../typescript/kendo.all.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
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
var KendoMVVMReact;
(function (KendoMVVMReact) {
    var KendoMVVMReactView = (function () {
        function KendoMVVMReactView() {
            this.viewModel = new KendoMVVMReactViewModel();
            kendo.bind($('#appContainer'), this.viewModel);
        }
        return KendoMVVMReactView;
    })();
    KendoMVVMReact.KendoMVVMReactView = KendoMVVMReactView;
    var KendoMVVMReactViewModel = (function (_super) {
        __extends(KendoMVVMReactViewModel, _super);
        function KendoMVVMReactViewModel() {
            _super.call(this);
            this.name = "";
            _super.prototype.init.call(this, this);
            this.set('people', new kendo.data.ObservableArray([
                { Name: "Bob" },
                { Name: "Alice" },
                { Name: "Mark" },
                { Name: "Joe" }
            ]));
            this.set('peopleList', new kendo.data.ObservableObject({
                'component': PeopleList,
                'props': { 'people': this.get('people') }
            }));
        }
        KendoMVVMReactViewModel.prototype.addPerson = function () {
            if (this.get('name')) {
                this.people.push({ Name: this.get('name') });
            }
            this.set('peopleList', { 'component': PeopleList, 'props': { 'people': this.get('people') } });
            this.set('name', '');
        };
        return KendoMVVMReactViewModel;
    })(kendo.data.ObservableObject);
    KendoMVVMReact.KendoMVVMReactViewModel = KendoMVVMReactViewModel;
})(KendoMVVMReact || (KendoMVVMReact = {}));
var view;
$(function () {
    view = new KendoMVVMReact.KendoMVVMReactView();
});
//# sourceMappingURL=demoKendoMVVMReact.js.map