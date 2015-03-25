"use strict";

let PreventGhostClickMixin =  {

    shouldPreventGostClick(event) {
        if( navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)
        ) {
            return event && (event.type == "mouseup");
        }
        else {
            return false;
        }
    },

};

module.exports = PreventGhostClickMixin;