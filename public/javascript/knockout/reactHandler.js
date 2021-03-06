var KnockoutMixin = {

    updateKnockout() {
        this.__koTrigger(!this.__koTrigger());
    },

    componentDidMount() {
        this.__koTrigger = ko.observable(true);
        this.__koModel = ko.computed(function () {
            this.__koTrigger(); // subscribe to changes of this...

            return {
                props: this.props,
                state: this.state
            };
        }, this);

        ko.applyBindings(this.__koModel, this.getDOMNode());
    },

    componentWillUnmount() {
        ko.cleanNode(this.getDOMNode());
    },

    componentDidUpdate() {
        this.updateKnockout();
    }
};

// <ul data-bind="react: { $: ToDoList, props: $data }><ul>
var reactHandler = ko.bindingHandlers.react = {
    render: function ( el, Component, props ) {
        ReactDOM.render(
            React.createElement(Component,props),
            el
        );
    },

    init: function ( el, valueAccessor, allBindingsAccessor, viewModel, bindingContext ) {
        var options = valueAccessor();
        var Component = ko.unwrap(options.component || options.$);
        var props = ko.toJS(options.props || viewModel);

        reactHandler.render(el, Component, props);

        return { controlsDescendantBindings: true };
    },

    update: function ( el, valueAccessor, allBindingsAccessor, viewModel, bindingContext ) {
        var options = valueAccessor();
        var Component = ko.unwrap(options.component || options.$);
        var props = ko.toJS(options.props || viewModel);

        reactHandler.render(el, Component, props);

        return { controlsDescendantBindings: true };
    }
};