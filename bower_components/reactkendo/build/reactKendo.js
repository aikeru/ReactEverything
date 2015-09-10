'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

(function (reactKendo) {
    //Create common widgets
    var common = reactKendo.common;
    reactKendo.Kendo = {
        AutoComplete: common.createCommonClassForWidget('kendoAutoComplete', function (props) {
            return React.createElement('input', props);
        }),
        DatePicker: common.createCommonClassForWidget('kendoDatePicker', function (props) {
            return React.createElement('input', props);
        }),
        Button: common.createCommonClassForWidget('kendoButton', function (props) {
            return React.createElement(
                'button',
                props,
                props.children
            );
        }),
        ColorPalette: common.createCommonClassForWidget('kendoColorPalette', function (props) {
            return React.createElement(
                'div',
                props,
                props.children
            );
        }),
        ColorPicker: common.createCommonClassForWidget('kendoColorPicker', function (props) {
            return React.createElement('input', props);
        }),
        DateTimePicker: common.createCommonClassForWidget('kendoDateTimePicker', function (props) {
            return React.createElement('input', props);
        }),
        DropDownList: common.createCommonClassForWidget('kendoDropDownList', function (props) {
            return React.createElement(
                'select',
                props,
                props.children
            );
        }),
        Editor: common.createCommonClassForWidget('kendoEditor', function (props) {
            return React.createElement(
                'textarea',
                props,
                props.children
            );
        }),
        MaskedTextBox: common.createCommonClassForWidget('kendoMaskedTextBox', function (props) {
            return React.createElement('input', props);
        }),
        MultiSelect: common.createCommonClassForWidget('kendoMultiSelect', function (props) {
            return React.createElement(
                'select',
                props,
                props.children
            );
        }),
        NumericTextBox: common.createCommonClassForWidget('kendoNumericTextBox', function (props) {
            return React.createElement('input', props);
        }),
        Slider: common.createCommonClassForWidget('kendoSlider', function (props) {
            return React.createElement('input', props);
        }),
        TimePicker: common.createCommonClassForWidget('kendoTimePicker', function (props) {
            return React.createElement('input', props);
        }),
        Upload: common.createCommonClassForWidget('kendoUpload', function (props) {
            return React.createElement('input', _extends({ type: 'file' }, props));
        }),
        MobileSwitch: common.createCommonClassForWidget('kendoMobileSwitch', function (props) {
            return React.createElement('input', props);
        }),
        MobileButtonGroup: common.createCommonClassForWidget('kendoMobileButtonGroup', function (props) {
            return React.createElement(
                'ul',
                props,
                props.children
            );
        }),
        Menu: common.createCommonClassForWidget('kendoMenu', function (props) {
            return React.createElement(
                'ul',
                props,
                props.children
            );
        }),
        PanelBar: common.createCommonClassForWidget('kendoPanelBar', function (props) {
            return React.createElement(
                'ul',
                props,
                props.children
            );
        }),
        TabStrip: common.createCommonClassForWidget('kendoTabStrip', function (props) {
            return React.createElement(
                'div',
                props,
                props.children
            );
        }),
        ToolBar: common.createCommonClassForWidget('kendoToolBar', function (props) {
            return React.createElement(
                'div',
                props,
                props.children
            );
        }),
        TreeView: common.createCommonClassForWidget('kendoTreeView', function (props) {
            return React.createElement(
                'ul',
                props,
                props.children
            );
        }),
        Calendar: common.createCommonClassForWidget('kendoCalendar', function (props) {
            return React.createElement(
                'div',
                props,
                props.children
            );
        }),
        Gantt: common.createCommonClassForWidget('kendoGantt', function (props) {
            return React.createElement(
                'div',
                props,
                props.children
            );
        }),
        Scheduler: common.createCommonClassForWidget('kendoScheduler', function (props) {
            return React.createElement(
                'div',
                props,
                props.children
            );
        }),
        Grid: common.createCommonClassForWidget('kendoGrid', function (props) {
            return React.createElement(
                'div',
                props,
                props.children
            );
        }),
        ListView: common.createCommonClassForWidget('kendoListView', function (props) {
            return React.createElement(
                'div',
                props,
                props.children
            );
        }),
        Pager: common.createCommonClassForWidget('kendoPager', function (props) {
            return React.createElement(
                'div',
                props,
                props.children
            );
        }),
        PivotGrid: common.createCommonClassForWidget('kendoPivotGrid', function (props) {
            return React.createElement(
                'div',
                props,
                props.children
            );
        }),
        PivotConfigurator: common.createCommonClassForWidget('kendoPivotConfigurator', function (props) {
            return React.createElement(
                'div',
                props,
                props.children
            );
        }),
        TreeList: common.createCommonClassForWidget('kendoTreeList', function (props) {
            return React.createElement(
                'div',
                props,
                props.children
            );
        }),
        //var KendoScrollView <-- this is a mobile swiping view
        Notification: common.createCommonClassForWidget('kendoNotification', function (props) {
            return React.createElement(
                'span',
                props,
                props.children
            );
        }),
        //Can responsive panel supply custom tag?
        ResponsivePanel: common.createCommonClassForWidget('kendoResponsivePanel', function (props) {
            return React.createElement(
                'nav',
                props,
                props.children
            );
        }),
        Splitter: common.createCommonClassForWidget('kendoSplitter', function (props) {
            return React.createElement(
                'div',
                props,
                props.children
            );
        }),
        ToolTip: common.createCommonClassForWidget('kendoToolTip', function (props) {
            return React.createElement(
                'div',
                props,
                props.children
            );
        }),
        Window: common.createCommonClassForWidget('kendoWindow', function (props) {
            return React.createElement(
                'div',
                props,
                props.children
            );
        }),
        Draggable: common.createCommonClassForWidget('kendoDraggable', function (props) {
            return React.createElement(
                'div',
                props,
                props.children
            );
        }),
        DropTarget: common.createCommonClassForWidget('kendoDropTarget', function (props) {
            return React.createElement(
                'div',
                props,
                props.children
            );
        }),
        ProgressBar: common.createCommonClassForWidget('kendoProgressBar', function (props) {
            return React.createElement(
                'div',
                props,
                props.children
            );
        }),
        Sortable: common.createCommonClassForWidget('kendoSortable', function (props) {
            return React.createElement(
                'ul',
                props,
                props.children
            );
        }),
        Chart: common.createCommonClassForWidget('kendoChart', function (props) {
            return React.createElement(
                'div',
                props,
                props.children
            );
        }),
        BarCode: common.createCommonClassForWidget('kendoBarCode', function (props) {
            return React.createElement(
                'span',
                props,
                props.children
            );
        }),
        QRCode: common.createCommonClassForWidget('kendoQRCode', function (props) {
            return React.createElement(
                'div',
                props,
                props.children
            );
        }),
        LinearGauge: common.createCommonClassForWidget('kendoLinearGauge', function (props) {
            return React.createElement(
                'div',
                props,
                props.children
            );
        }),
        RadialGauge: common.createCommonClassForWidget('kendoRadialGauge', function (props) {
            return React.createElement(
                'div',
                props,
                props.children
            );
        }),
        Diagram: common.createCommonClassForWidget('kendoDiagram', function (props) {
            return React.createElement(
                'div',
                props,
                props.children
            );
        }),
        Map: common.createCommonClassForWidget('kendoMap', function (props) {
            return React.createElement(
                'div',
                props,
                props.children
            );
        }),
        FlatColorPicker: common.createCommonClassForWidget('kendoFlatColorPicker', function (props) {
            return React.createElement(
                'div',
                props,
                props.children
            );
        })
    };
})(window.reactKendo = window.reactKendo || {});