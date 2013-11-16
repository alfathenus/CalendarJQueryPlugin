/*!
 * jQuery Calendar Splliter
 * Original author: Andres Lozada Mosto
 * Licensed under the MIT license
 */

;(function ( $, window, document, undefined ) {

    var pluginName = "CalendarSplitter",
        defaults = {
            propertyName: "value"
        };

    function CalendarSplitter( element, options ) {
        this.element = element;

        this.options = $.extend( {}, defaults, options) ;

        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    CalendarSplitter.prototype = {

        init: function() {
            // Place initialization logic here
            // You already have access to the DOM element and
            // the options via the instance, e.g. this.element
            // and this.options
            // you can add more functions like the one below and
            // call them like so: this.yourOtherFunction(this.element, this.options).
            this.addCalendar(this.element, this.options);
        },

        addCalendar: function(el, options) {
            var width = $(el).width();
            var item = $(el);
            this.addYearButton(item, width);
            var widthQ = this.addQuarterButtons(item, width);
            this.addMonthsButtons(item, width);
        },
        addYearButton: function(el, width) {
            el.append('<div style="width:' + (width-0) + 'px" class="btn-group month"><button style="width:100%" type="button" class="btn btn-default">YTD</button></div>');
        },
        addQuarterButtons: function(el, width) {
            var wq = 100 / 4;
            var txt = '<div style="width:' + width + 'px;" class="btn-group quarter">';
            txt += '<button style="width:' + wq + '%; margin:0px; padding:0px;" type="button" class="btn btn-default">Q1</button>';
            txt += '<button style="width:' + wq + '%; margin:0px; padding:0px;" type="button" class="btn btn-default">Q2</button>';
            txt += '<button style="width:' + wq + '%; margin:0px; padding:0px;" type="button" class="btn btn-default">Q3</button>';
            txt += '<button style="width:' + wq + '%; margin:0px; padding:0px;" type="button" class="btn btn-default">Q4</button>';
            txt += '</div>';
            el.append(txt);
            return wq;
        },
        addMonthsButtons: function(el, width) {
            var wq = 100/12;//width/4;
            txt = '<div style="width:' + width  + 'px" class="btn-group month">';
            txt += '<button style="width:' + wq + '%; margin:0px; padding:0px;" type="button" class="btn btn-default">J</button>';
            txt += '<button style="width:' + wq + '%; margin:0px; padding:0px;" type="button" class="btn btn-default">F</button>';
            txt += '<button style="width:' + wq + '%; margin:0px; padding:0px;" type="button" class="btn btn-default">M</button>';
            txt += '<button style="width:' + wq + '%; margin:0px; padding:0px;" type="button" class="btn btn-default">A</button>';
            txt += '<button style="width:' + wq + '%; margin:0px; padding:0px;" type="button" class="btn btn-default">M</button>';
            txt += '<button style="width:' + wq + '%; margin:0px; padding:0px;" type="button" class="btn btn-default">J</button>';
            txt += '<button style="width:' + wq + '%; margin:0px; padding:0px;" type="button" class="btn btn-default">J</button>';
            txt += '<button style="width:' + wq + '%; margin:0px; padding:0px;" type="button" class="btn btn-default">A</button>';
            txt += '<button style="width:' + wq + '%; margin:0px; padding:0px;" type="button" class="btn btn-default">S</button>';
            txt += '<button style="width:' + wq + '%; margin:0px; padding:0px;" type="button" class="btn btn-default">O</button>';
            txt += '<button style="width:' + wq + '%; margin:0px; padding:0px;" type="button" class="btn btn-default">N</button>';
            txt += '<button style="width:' + wq + '%; margin:0px; padding:0px;" type="button" class="btn btn-default">D</button>';
            txt += '</div>';
            
            el.append(txt);
        }
    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName,
                new CalendarSplitter( this, options ));
            }
        });
    };

})( jQuery, window, document );