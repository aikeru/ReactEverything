(function(kendo, ui, Widget, $) {

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

    function type(obj) {
      return Object.prototype.toString.call(obj).slice(8, -1);
    }

    function shouldKendoUnwrap(sourceGet) {
      var isReallyObservable = true;
      if(sourceGet && type(sourceGet) === 'Function') {
        var isReallyObservable = false;
        if (sourceGet.__proto__) {
          isReallyObservable = kendo.data.ObservableObject === sourceGet.__proto__.constructor; //modern browsers
        } else {
          //ie 8 and such
          isReallyObservable = sourceGet.constructor && sourceGet.constructor === kendo.data.ObservableObject;
        }
      }
      return isReallyObservable;
    }

    kendo.data.binders.widget.reactcomponent = kendo.data.Binder.extend({
      init: function (widget, bindings, options) {
        kendo.data.Binder.fn.init.call(this, widget.element[0], bindings, options);

        this._lookups = [];
        for(var key in this.bindings.reactcomponent.path) {
          this._lookups.push({
            key: key,
            path: this.bindings.reactcomponent.path[key]
          });
        }
      },
      refresh: function() {
        var lookup,
          value,
          args = {};
        for(var i = 0; i < this._lookups.length; i++) {
          lookup = this._lookups[i];
          if(lookup.key.toLowerCase() === "props" && type(lookup.path) !== "String") {
            var propObj = {};
            for(var propKey in lookup.path) {
              if(Object.hasOwnProperty.call(lookup.path, propKey)) {
                this.bindings.reactcomponent.path = lookup.path[propKey];
                //Woah... kendo's check for an observable messes up on passing functions :(
                var sourceGet = this.bindings.reactcomponent.source.get(lookup.path[propKey]);
                //Is this a function, and if so, is it really an observable?
                if(shouldKendoUnwrap(sourceGet)) {
                  //Let Kendo get it for us
                  propObj[propKey] = this.bindings.reactcomponent.get();
                } else {
                  //Get the source ourselves ...
                  propObj[propKey] = sourceGet;
                }
              }
            }
            args.props = propObj;
          } else {
            var sourceGet = this.bindings.reactcomponent.source.get(lookup.path);
            this.bindings.reactcomponent.path = lookup.path;
            if(shouldKendoUnwrap(sourceGet)) {
              //Let Kendo get it for us
              args[lookup.key] = this.bindings.reactcomponent.get();
            } else {
              //Get the source ourselves ...
              args[lookup.key] = sourceGet;
            }
          }

        }

        $(this.element).data('kendoReactComponent')
          .value({
            component: args.component,
            props: args.props,
            children: args.children
          });
      }
    });

    var ReactComponent = Widget.extend({
       init: function(element, options) {
           Widget.fn.init.call(this, element, options);
           //where to get React.render(<App />, document.getElementById('appBody'));
           //React.render(React.createElement('div', props, props.children))
           //React.render(React.createElement(App, null), $(element)[0]);
       },
       value: function(value) {
           if(arguments.length === 0) {
               //We, as a react component, shouldn't be changing this
               return this._value;
           } else {
               React.render(
                   React.createElement(value.componentName || value.component,
                       value.props || {},
                       value.children || []),
                   $(this.element)[0]);
               this._value = value;
           }

       },
        refresh: function() {

        },
        options: {
            name: "ReactComponent"
        },
        destroy: function() {
          React.unmountComponentAtNode($(this.element)[0]);
        }
    });
    ui.plugin(ReactComponent);
})(kendo, kendo.ui, kendo.ui.Widget, jQuery);
