# ReactKendo

### Why ReactKendo?

I love React, I think it's awesome. Sometimes in order to adopt frameworks like React, it needs to "just work" with someone else's favorite UI framework (ie: Kendo). Embedding external plugins and widgets like jQuery with React is actually really easy. That said, Kendo has projects to bind with Angular and Knockout, but not React. This project aims to make using React + Kendo easy and fun -- drop in one library and use the same API detailed on the Kendo UI documentation. 

### How to use this?

* Get react.js up and running in your project
* Include the latest reactKendo.js from https://github.com/aikeru/ReactKendo/tree/master/dist
* Use elements like ```<reactKendo.Kendo.DatePicker>``` OR alias using
```javascript:
    var Kendo = reactKendo.Kendo;
    <Kendo.DatePicker ...>
```
* Specify bound properties much like the Kendo Knockout project, using ReactKendo's 'bind' property.
```javascript:
    var Kendo = reactKendo.Kendo;
    <Kendo.DatePicker bind={{value:this.state.startDate}}></Kendo.DatePicker>
```
* Look to https://github.com/aikeru/ReactKendo/tree/master/demo for examples
* When you bind values, they are sent directly to the kendo widget, so property names/methods should match 1:1 to the Kendo UI API.

### Which widgets are implemented?

Almost all of the kendo widgets are implemented, but not all of them have been thoroughly tested with react bindings. There are bindings defined for the following widgets:

* AutoComplete
* BarCode
* Button
* Calendar
* Chart
* ColorPalette
* ColorPicker
* DatePicker
* DateTimePicker
* Diagram
* Draggable
* DropDownList
* DropTarget
* Editor
* Gantt
* Grid
* LinearGauge
* ListView
* Map
* MaskedTextBox
* Menu
* MobileButtonGroup
* MobileSwitch
* MultiSelect
* Notification
* NumericTextBox
* PanelBar
* Pager
* PivotConfigurator
* PivotGrid
* ProgressBar
* QRCode
* RadialGauge
* ResponsivePanel
* Scheduler
* Slider
* Sortable
* Splitter
* TabStrip
* TimePicker
* ToolBar
* ToolTip
* TreeList
* TreeView
* Window
* Upload

### Will this help me with my own widgets?

Yes. You can use the wrapper factory ```reactKendo.common.createCommonClassForWidget()```. For example:
```javascript:
    //The wrapper factory accepts arguments like so...
    // createCommonClassForWidget(widgetNameString, (props) => reactComponent);

    //Given a widget that is registered like so...
    $('#sometag').kendoAwesomeDivWidget(args);
    
    //You can use the factory like so ...
    var KendoAwesomeDivWidget = reactKendo.common.createCommonClassForWidget('kendoAwesomeDivWidget', 
        (props) => <div {...props}>{props.children}</div>);
    
    //A widget that uses a self-closing 'input' tag
    var KendoAwesomeInputWidget = reactKendo.common.createCommonClassForWidget('kendoAwesomeInputWidget', 
        (props) => <input {...props} />);
```
Please be aware that at this stage, this particular API call will most likely change.

### Why isn't there more source code?

Because implementing a kendo widget wrapper with react is actually REALLY TRIVIAL to do. Testing the different permutations of kendo components and configurations is far more difficult.

### How do I run the demos?

You can run ```node app``` from the root of the project, then navigate to ```http://localhost:8080/index.html``` to see a list of demos.
