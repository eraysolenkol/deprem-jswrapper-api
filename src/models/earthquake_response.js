import BaseResponse from "./base_response.js";
import EarthquakeInfo from "./earthquake_info.js";

/**
 * @class {EarthquakeResponse} - EarthquakeResponse class
 */
export default class EarthquakeResponse extends BaseResponse {
    earthquakes;

/**
* Constructor of base class for responses
* @constructor
* @param {number} status - Status number of response
* @param {string} message - Status message of response
* @param {EarthquakeInfo[]} earthquakes - Array that will hold EarthquakeInfo instances
*/
    constructor(status, message, earthquakes) {
        super(status, message);
        this.earthquakes = earthquakes;
    }

    /**
     * Gets the array of earthquakes
     * @function
     */
    getEarthquakes() {
        return this.earthquakes;
    }


}