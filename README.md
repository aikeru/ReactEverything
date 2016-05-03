# React Everything

This is a series of demos that illustrate how React can easily be used with virtually any other framework. The same component (PeopleList.jsx) is used for each example. This means that you could effectively write your component one time in React and have it adopted by users of the the frameworks in the various demos.

## Demos

### Angular 2.beta.1 with React
Uses /src/angular2/ReactComponent.js (ES7)<br/>
* import the ReactComponent in your project
* Inject 'ReactComponent' as a directive in your View Annotation
* Use ```<react-component></react-component>``` which accepts:
  * ```[props]``` - the React component props
  * ```[component]``` - the component to be passed to ```React.createElement```
  * (optional) ```[children]``` - an array of React elements as children to the component
* See the /src/angular2/app.js example code

### Angular 1.x with React
Uses ngReact https://github.com/davidchang/ngReact

### Kendo MVVM with React
Uses /public/javascript/kendo/kendo.reactComponent.js, a Kendo UI Widget
* Include kendo.reactComponent.js in your project
* Use the reactcomponent custom widget, ie: ```<div data-role="reactcomponent"></div>``` which accepts:
  * ```props``` - the React component props
  * ```component``` - the component to be passed to ```React.createElement```
  * (optional) ```children``` - an array (or observable array) of children
* You have two options to pass the parameters to the react component:
  * Use the ```reactcomponent:``` binding, ie: ```reactcomponent: { component: MyComponent, props: { ... } }```
  * Use the ```value:``` binding, pointing to a prepopulated object on your viewmodel, ie: ```value: componentArgs```
* See the /src/kendo/app-demo.ts example code

> The ```reactcomponent``` binding ```component``` argument must be a property on the viewmodel. Kendo doesn't allow binding to arbitrary values from, say, ```window``` scope, where components may live.


### Knockout with React
Uses code copied from ```ideas.js``` in https://github.com/lelandrichardson/knockout-react/<br/>
Use /public/javascript/knockout/reactHandler.js

### Durandal with React
I haven't written one yet, but a project exists for this here: https://github.com/bshorrosh/Durandal-React-Sample

### Aurelia with React
I haven't written one yet, but a blog post with instructions for this is here: http://ilikekillnerds.com/2015/03/how-to-use-react-js-in-aurelia/

## Why?

Because React is awesome and it's one of the few things that can pull off a feat like this. Because packaging a React component is easier than packaging components for many other frameworks.


## Copyright / License

Original code in this repository is subject to the license below, which includes the demo code (specific app and html files, build configuration, etc.), the ReactComponent.js, the kendo.reactComponent.js, and my original work in reactHandler.js (some parts of which derived from Leland Richardson's 'ideas.js').

The MIT License (MIT)

Copyright (c) 2016, Michael K Snead

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
