/**
 * @class {BaseResponse} - BaseResponse class
 */
class BaseResponse {
    status;
    message;

    /**
    * Constructor of base class for responses
    * @constructor
    * @param {number} status - Status number of response
    * @param {string} message - Status message of response
    */
    constructor(status, message) {
        this.status = status;
        this.message = message;
    }

    /**
     * Gets status number of response
     * @function
     */
    getStatus() {
        return this.status;
    }

        /**
     * Gets status message of response
     * @function
     */
    getMessage() {
        return this.message;
    }

}

export default BaseResponse;