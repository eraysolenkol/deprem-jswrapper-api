import BaseResponse from "./base_response.js";

/**
 * @class {EarthquakeInfo} - EarthquakeInfo class
 */
class EarthquakeInfo {

    date_YYMMDD;
    time;
    latitude;
    longitude;
    depthInKm;
    type;
    magnitude;
    location;
    id;

    /**
    * Constructor of EarthquakeInfo class that presents us 
    * significant info about the earthquake
    * @constructor
    * @param {string} date_YYMMDD - Date of earthquake in format YY-MM-DD
    * @param {string} time - Time of earthquake in format HH:mm:ss
    * @param {number} latitude - Latitude of earthquake location
    * @param {number} longitude - Longitude of earthquake location
    * @param {number} depthInKm - Depth of earthquake in kilometers
    * @param {string} type - Type of earthquake
    * @param {number} magnitude - Magnitude of earthquake
    * @param {string} location - Location of earthquake
    * @param {number} id - Id of earthquake
    */
    constructor(date_YYMMDD, time,  latitude, longitude, depthInKm, type, magnitude, location, id) {
        this.date_YYMMDD = date_YYMMDD;
        this.time = time;
        this.latitude = latitude;
        this.longitude = longitude;
        this.depthInKm = depthInKm;
        this.type = type;
        this.magnitude = magnitude;
        this.location = location;
        this.id = id;
    }

    /**
     * Gets date of earthquake in format YY-MM-DD
     * @function
     */
    getDate() {
        return this.date_YYMMDD;
    }
    
    /**
     * Gets time of earthquake in format HH:mm:ss
     * @function
     */
    getTime() {
        return this.time;
    }

    /**
     * Gets the latitude of earthquake
     * @function
     */
    getLatitude() {
        return this.latitude;
    }

    /**
     * Gets the longitude of earthquake
     * @function
     */
    getLongitude() {
        return this.longitude;
    }

    /**
     * Gets the location of earthquake in maps format
     * @function
     */
    getLocationInMapsFormat() {
        return `${this.latitude} , ${this.longitude}`;
    }

    /**
     * Gets the depth of earthquake in kilometers
     * @function
     */
    getDepthInKm() {
        return this.depthInKm;
    }

    /**
     * Gets the type of earthquake
     * @function
     */
    getType() {
        return this.type;
    }

    /**
     * Gets the magnitude of earthquake
     * @function
     */
    getMagnitude() {
        return this.magnitude;
    }

    /**
     * Gets the location of earthquake
     * @function
     */
    getLocation() {
        return this.location;
    }
    
    /**
     * Gets the id of earthquake
     * @function
     */
    getId() {
        return this.id;
    }

}

export default EarthquakeInfo;