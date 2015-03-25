'use strict';

let eventConstants = require('../eventConstants');
let api = require('../api/');

let AUTHORIZATION_ERROR = 401;

module.exports = {
    answerQuestion(id) {
        return api.tripsuit.answerQuestion(id)
                .catch(err => {
                    if (err.code == AUTHORIZATION_ERROR || err.status == AUTHORIZATION_ERROR ) {
                        this.dispatch(eventConstants.SERVER.LOGOUT, err);
                    } else {
                        this.dispatch(eventConstants.SERVER.CONNECTION_ERROR, err);
                    }
                });
    },

    sendTrackingEvent(eventType, text) {
        ga('send', 'event', eventType, text);
    },

    toogleLeftPanel() {
        this.dispatch(eventConstants.UI.LEFT_PANEL_CLICK);
    },

    hideLeftPanel() {
        this.dispatch(eventConstants.UI.LEFT_PANEL_CLICK, false);
    },

    toogleLoginForm() {
        this.dispatch(eventConstants.UI.TOOGLE_LOGIN_FORM);
    },

    toogleRegistrationForm() {
        this.dispatch(eventConstants.UI.TOOGLE_REGISTRATION_FORM);
    },

    goToNextLocation() {
        this.dispatch(eventConstants.UI.NEXT_LOCATION);
    },

    hideErrors() {
        this.dispatch(eventConstants.UI.NO_ERRORS);
    },

    updateCurrentPageType(type) {
        this.dispatch(eventConstants.UI.UPDATE_CURRENT_PAGE, type);
    },

    addtoStoryBook(name, id) {

        let data = {
            name: name,
            id: id
        };

        this.dispatch(eventConstants.UI.ADD_TO_STORY_BOOK, data);
    },

    dislike(name) {
        this.dispatch(eventConstants.UI.DISLIKE_HOTEL, name);
    },

    dislikeActivity(name) {
        this.dispatch(eventConstants.UI.DISLIKE_ACTIVITY, name);
    },

    addActivityToStoryBook(name, id) {
        let data = {
            name: name,
            id: id
        };
        this.dispatch(eventConstants.UI.ADD_ACTIVITY_TO_STORY_BOOK, data);
    },

    loadCategoryDataById(id) {

        return api.tripsuit.loadCategoryDataById(id)
                .then(trees => {
                    this.dispatch(eventConstants.SERVER.QUESTION_CATEGORY_DETAILS, trees.data);
                })
                .catch(err => {
                    if (err.code == AUTHORIZATION_ERROR || err.status == AUTHORIZATION_ERROR ) {
                        this.dispatch(eventConstants.SERVER.LOGOUT, err);
                    } else {
                        this.dispatch(eventConstants.SERVER.CONNECTION_ERROR, err);
                    }
                });
    },

    loadData() {

        return this.flux.actions.tripsuit.getLocations().then(() => {
            let city = this.flux.store('locations').getCurrentCity();
            this.flux.actions.tripsuit.getHotels(city && city.location_id);
            this.flux.actions.tripsuit.loadActivities(city && city.location_id);
        });

    },

    loadQuizTrees() {
        return api.tripsuit.getQuizTrees()
                .then(trees => {
                    this.dispatch(eventConstants.SERVER.QUESTION_TREES, trees.data);
                })
                .catch(err => {

                    if (err.code == AUTHORIZATION_ERROR || err.status == AUTHORIZATION_ERROR ) {
                        this.dispatch(eventConstants.SERVER.LOGOUT, err);
                    } else {
                        this.dispatch(eventConstants.SERVER.CONNECTION_ERROR, err);
                    }
                });
    },

    loadUserQuestiontreeProgress() {
        return api.tripsuit.loadUserQuestiontreeProgress()
                .then(progress => {
                    this.dispatch(eventConstants.SERVER.USER_QUESTION_PROGRESS, progress.data);
                })
                .catch(err => {

                    if (err.code == AUTHORIZATION_ERROR || err.status == AUTHORIZATION_ERROR ) {
                        this.dispatch(eventConstants.SERVER.LOGOUT, err);
                    } else {
                        this.dispatch(eventConstants.SERVER.CONNECTION_ERROR, err);
                    }
                });
    },

    updateLanguage(language) {
        this.dispatch(eventConstants.UI.UPDATE_LANGUAGE, language);
    },

    updateCurrentCity(city) {
        this.dispatch(eventConstants.UI.UPDATE_CURRENT_CITY, city);
    },

    updateCurrentPage([page]) {
        this.dispatch(eventConstants.UI.UPDATE_CURRENT_PAGE, page);
    },

    getHotels(id) {

        return api.tripsuit.getHotels(id)
                .then(hotels => {
                    let data = {
                        hotels: hotels,
                        id: id
                    };
                    this.dispatch(eventConstants.SERVER.HOTELS_LIST, data);
                })
                .catch(err => {

                    if (err.code == AUTHORIZATION_ERROR || err.status == AUTHORIZATION_ERROR ) {
                        this.dispatch(eventConstants.SERVER.LOGOUT, err);
                    } else {
                        this.dispatch(eventConstants.SERVER.CONNECTION_ERROR, err);
                    }
                });
    },

    getLocations() {

        return api.tripsuit.getLocations()
                .then(cities => {
                    this.dispatch(eventConstants.SERVER.CITIES_LIST, cities);
                    return cities;
                })
                .catch(err => {

                    if (err.code == AUTHORIZATION_ERROR || err.status == AUTHORIZATION_ERROR ) {
                        this.dispatch(eventConstants.UI.LOGOUT, err);
                    } else {
                        this.dispatch(eventConstants.SERVER.CONNECTION_ERROR, err);
                    }
                });
    },

    loadActivitiesDetails(id) {
        return api.tripsuit.loadActivitiesDetails(id);/*
                .then(hotel => {
                    this.dispatch(eventConstants.SERVER.ACTIVITIES_DETAILS, hotel.data);
                })
                .catch(err => {

                    if (err.code == AUTHORIZATION_ERROR || err.status == AUTHORIZATION_ERROR ) {
                        this.dispatch(eventConstants.UI.LOGOUT, err);
                    } else {
                        this.dispatch(eventConstants.SERVER.CONNECTION_ERROR, err);
                    }
                });*/
    },

    loadActivities(id) {

        return api.tripsuit.getActivitiList(id)
                .then(activities => {
                    let data = {
                        activities: activities,
                        id: id
                    };
                    this.dispatch(eventConstants.SERVER.ACTIVITY_LIST, data);
                })
                .catch(err => {

                    if (err.code == AUTHORIZATION_ERROR || err.status == AUTHORIZATION_ERROR ) {
                        this.dispatch(eventConstants.UI.LOGOUT, err);
                    } else {
                        this.dispatch(eventConstants.SERVER.CONNECTION_ERROR, err);
                    }
                });
    },

    getHotelDetails(id) {
        return api.tripsuit.getHotelDetails(id)
                .then(hotel => {
                    this.dispatch(eventConstants.SERVER.HOTEL_DETAILS, hotel.data);
                })
                .catch(err => {

                    if (err.code == AUTHORIZATION_ERROR || err.status == AUTHORIZATION_ERROR ) {
                        this.dispatch(eventConstants.UI.LOGOUT, err);
                    } else {
                        this.dispatch(eventConstants.SERVER.CONNECTION_ERROR, err);
                    }
                });
    },

    registerUser(user) {

        return api.tripsuit.registerUser(user)
                .then(data => {
                    let type = 'register_success';
                    let text = 'Ein Nutzer hat sich erfolgreich registriert';
                    this.flux.actions.tripsuit.sendTrackingEvent(type, text);
                    this.flux.actions.session.authenticate(user);
                    return data;
                })
                .catch(err => {
                    console.error('[Actions.registerUser]', err);
                    this.dispatch(eventConstants.SERVER.REGISTER_ERROR, err);
                    return err;
                });
    }
};