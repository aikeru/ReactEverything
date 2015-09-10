function ReactComponent(elementRef) {
  this._element = elementRef.domElement;
}
ReactComponent.prototype.render = function render(props) {
  if(!this.component) {return;}
  React.render(
    React.createElement(this.component,
      this.props || {},
      this.children || []),
    this._element);
};
ReactComponent.prototype.onChange = function onChange(changes) {
  console.log('change',changes);
  var propsChanged = false;
  if(changes.props) {
    propsChanged = true;
    this.props = changes.props.currentValue;
  }
  if(changes.component) {
    this.component = changes.component.currentValue;
  }

  if(propsChanged && this.component) {
    //Props did change, rerender
    this.render();
  }
};
ReactComponent.prototype.onDestroy = function onDestroy() {
  console.log('//TODO: destroy react component', arguments);
};

ReactComponent.annotations = [
  new angular.ComponentAnnotation({
    selector: 'reactcomponent',
    lifecycle: [angular.onChange, angular.onDestroy],
    properties: ['props', 'component']
  }),
  new angular.ViewAnnotation({
    template: ``
  })
];
ReactComponent.parameters = [
  [angular.ElementRef]
];