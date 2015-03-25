'use strict';

let Base = require('./Base');
let Q = require('q');

class TripSuit extends Base {

    getSession() {
        return this.apiClient.get('session').then(data => data ? data : Q.reject(data));
    }

    getHotels(id) {

        let data = {
            "location_id": id
        };

        return this.apiClient.get("hotels.json", data);
    }

    answerQuestion(id) {
        return this.apiClient.post("staticAnswer.json/" + id);
    }

    getLocations() {
        return this.apiClient.get("locations.json");
    }

    getQuizTrees() {
        return this.apiClient.get("questiontreeInfo.json");
    }

    loadUserQuestiontreeProgress() {
        return this.apiClient.get("userQuestiontreeProgress.json");
    }

    loadActivitiesDetails() {
        return null;
    }

    loadCategoryDataById(id) {
        return this.apiClient.get("questiontree.json"+"/"+id);
    }

    getHotelDetails(id) {
       return this.apiClient.get("hoteldetails/hotel_id.json"+"/"+id.hotel_id+"/start_date/1/end_date/2");
    }

    authorizateUser(user) {
        return this.apiClient.post("login", user);
    }

    getAuthorizationToken() {
        return this.apiClient.getAuthorizationToken();
    }

    setAuthorizationToken(data) {
        this.apiClient.setAuthorizationToken(data);
    }

    getActivitiList(id) {
        return this.apiClient.get("activitycategories/location_id.json/"+id+"/startRank/1/quantity/5");
    }

    registerUser(user) {
        return this.apiClient.post("register.json", user);
    }

}

module.exports = TripSuit;