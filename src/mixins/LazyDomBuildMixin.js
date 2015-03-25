"use strict";

/*
    Need getPageType() method in props, this.currentPageName - with current page name inside,
*/

let LazyDomBuildMixin =  {

    shouldComponentUpdate() {

        let isCurrentPageActive = this.props.getPageType() == this.currentPageName;
        this.lastVisitedPage = this.lastVisitedPageTmp;
        let isCurrentPageBeenPreviousActive = this.lastVisitedPage == this.currentPageName;
        this.lastVisitedPageTmp = this.props.getPageType();

        if (isCurrentPageActive) {
            this.debounceForDomBuildEnd = false;
        } else {
            this.debounceForDomRemoveEnd = false;
        }

        let shouldUpdate = isCurrentPageActive || isCurrentPageBeenPreviousActive;

        return shouldUpdate;
    },

    lazyBuild(aditionalCondition, delay) {

        if (!this.debounceForDomBuildEnd && aditionalCondition) {
            setTimeout(()=>{
                this.forceUpdate();
                this.debounceForDomBuildEnd = true;
            }, delay);
        }
    },

    lazyRemove(aditionalCondition, delay) {

        if (!this.debounceForDomRemoveEnd && !aditionalCondition) {
            setTimeout(()=>{
                this.forceUpdate();
                this.debounceForDomRemoveEnd = true;
            }, delay);
        }
    },

};

module.exports = LazyDomBuildMixin;