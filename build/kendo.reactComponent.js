"use strict";

(function (kendo, ui, Widget, $) {

    //kendo.data.binders.widget.reactcomponent = kendo.data.Binder.extend({
    //    init: function(widget, bindings, options) {
    //
    //       //kendo.data.Binder.fn.init.call(this, widget.element[0], bindings, options);
    //        kendo.data.Binder.fn.init.call(this, widget.element[0], bindings, options);
    //
    //    },
    //   refresh: function(key) {
    //       //var args = this.bindings["reactcomponent"].get();
    //       //console.log(args);
    //       console.log('refresh with', arguments);
    //   }
    //});

    var ReactComponent = Widget.extend({
        init: function init(element, options) {
            Widget.fn.init.call(this, element, options);
            //where to get React.render(<App />, document.getElementById('appBody'));
            //React.render(React.createElement('div', props, props.children))
            //React.render(React.createElement(App, null), $(element)[0]);
        },
        value: function value(_value) {
            if (arguments.length === 0) {
                //We, as a react component, shouldn't be changing this
                return this._value;
            } else {
                React.render(React.createElement(_value.component, _value.props || {}, _value.children || []), $(this.element)[0]);
                this._value = _value;
            }
        },
        refresh: function refresh() {},
        options: {
            name: "ReactComponent"
        }
    });
    ui.plugin(ReactComponent);
})(kendo, kendo.ui, kendo.ui.Widget, jQuery);