import {Component, View} from 'angular2/core';
import {ElementRef} from 'angular2/core';
import {Input} from 'angular2/core';

@Component({
    selector: 'react-component'
})
@View({
    template: ''
})
export default class ReactComponent {
    @Input() children = [];
    @Input() component = null;
    @Input() props = null;

    static parameters = [ElementRef];
    constructor(elementRef) {
        console.log('ReactComponent ctor');
        this._element = elementRef.nativeElement;
    }

    render(props) {
        console.log('ReactComponent render');
        ReactDOM.render(
            React.createElement(this.component,
            this.props || {},
            this.children || []),
            this._element);
    }

    ngOnChange(changes) {
        console.log('ngOnChange');
    }
    ngOnChanges(changes) {
        console.log('ReactComponent ngOnChanges');
        if(changes.component) {
            this.component = changes.component.currentValue;
        }
        if(changes.props) {
            //Did props change? If so, rerender.
            this.props = changes.props.currentValue;
            if(this.component) {
                this.render(this.props);
            }
        }
    }

    ngOnDestroy() {
        console.log('ReactComponent ngOnDestroy');
        React.unmountComponentAtNode(this._element);
    }

}

