"use strict";

var Kendo = reactKendo.Kendo;
var App = React.createClass({
    displayName: "App",

    getInitialState: function getInitialState() {
        return {};
    },
    render: function render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "div",
                null,
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "span",
                            null,
                            "AJAX Grid (must be able to communicate with telerik for data) :"
                        ),
                        React.createElement(Kendo.Grid, { id: "myGrid",
                            bind: { dataSource: {
                                    type: "odata",
                                    transport: {
                                        read: "//demos.telerik.com/kendo-ui/service/Northwind.svc/Customers"
                                    },
                                    pageSize: 20
                                },
                                height: 550,
                                groupable: true,
                                sortable: true,
                                pageable: {
                                    refresh: true,
                                    pageSizes: true,
                                    buttonCount: 5
                                },
                                columns: [{
                                    template: "<div class='customer-photo'" + "style='background-image: url(http://demos.telerik.com/kendo-ui/content/web/Customers/#:data.CustomerID#.jpg);'></div>" + "<div class='customer-name'>#: ContactName #</div>",
                                    field: "ContactName",
                                    title: "Contact Name",
                                    width: 240
                                }, {
                                    field: "ContactTitle",
                                    title: "Contact Title"
                                }, {
                                    field: "CompanyName",
                                    title: "Company Name"
                                }, {
                                    field: "Country",
                                    width: 150
                                }] } })
                    )
                )
            )
        );
    }
});
ReactDOM.render(React.createElement(App, null), document.getElementById('appBody'));