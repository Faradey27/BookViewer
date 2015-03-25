"use strict";

/*
    Need Router.State mixin
*/

let GetPageTypeMixin =  {

    getPageType() {
        let path = this.getPathname();
        path = path.replace('/',"");

        if (this.isActive("about", {cityName: this.getParams().cityName})) {
            return "about";
        } else if (path.match("hotels")) {
            return "hotels";
        } else if (this.isActive("activities") || this.isActive("ActivitiesDetailsPage")) {
            return "activities";
        } else if (this.isActive("booknow")) {
            return "booknow";
        } else {
            return "main";
        }
    },

};

module.exports = GetPageTypeMixin;