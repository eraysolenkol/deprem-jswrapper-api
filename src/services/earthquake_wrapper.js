import * as cheerio from 'cheerio';
import axios from 'axios'
import EarthquakeInfo from '../models/earthquake_info.js';
import Constants from '../constants/constants.js';
import EarthquakeResponse from '../models/earthquake_response.js';


/**
 * @class {EarthquakeWrapper} - EarthquakeWrapper class
 */
export default class EarthquakeWrapper {
    
    /**
     * Returns an array of earthquakeInfo's that includes last earthquakes up to limit 100
     * @function
     * @param {number} limit - The maximum value that the earthquakes number in array can reach
     */
    static async getLastEarthquakes(limit) {
        console.log("getLastEarthquakes method is working")
        if (limit > 100) {
            throw new Error("Limit can not be more than 100");
        }
        const earthquakes = [];
        const response = await axios.get(Constants.API_URL)
        const $ = cheerio.load(response.data);
        const table = $('.content-table tbody');
        const datas = table.find('tr');

        for (let i = 0; i < limit; i++) {
            const data = $(datas[i]).find('td');
            const [date_YYMMDD, time] = $(data[0]).text().split(" ");
            const latitude = parseFloat($(data[1]).text());
            const longitude = parseFloat($(data[2]).text());
            const depthInKm = parseFloat($(data[3]).text());
            const type = $(data[4]).text();
            const magnitude = parseFloat($(data[5]).text());
            const location = $(data[6]).text();
            const id = Number($(data[7]).text());
            earthquakes.push(
                new EarthquakeInfo(
                    date_YYMMDD,
                    time,
                    latitude,
                    longitude,
                    depthInKm,
                    type,
                    magnitude,
                    location,
                    id
                )
            );
        }
        return new EarthquakeResponse(response.status, response.statusText, earthquakes);
    }

    /**
     * Returns an array of earthquakeInfo's that includes last earthquakes 
     * with a magnitude greater than minMagnitude up to limit 100
     * @function
     * @param {number} limit - The maximum value that the earthquakes number in array can reach
     * @param {number} minMagnitude - The minimum magnitude value of earthquake which will be included in earthquakes array
     */
    static async getLastEarthquakesOverMagnitude(limit, minMagnitude) {
        console.log("getLastEarthquakesOverMagnitude method is working")
        if (limit > 100) {
            throw new Error("Limit can not be more than 100");
        }
        const earthquakes = [];
        const response = await axios.get(Constants.API_URL)
        const $ = cheerio.load(response.data);
        const table = $('.content-table tbody');
        const datas = table.find('tr');
        let earthquakeCount = 0;

        for (let i = 0; i < 100; i++) {
            if (earthquakeCount == limit) {
                break;
            }

            const data = $(datas[i]).find('td');
            const magnitude = parseFloat($(data[5]).text());

            if (magnitude < minMagnitude ) {
                continue;
            }
            earthquakeCount++;
            const [date_YYMMDD, time] = $(data[0]).text().split(" ");
            const latitude = parseFloat($(data[1]).text());
            const longitude = parseFloat($(data[2]).text());
            const depthInKm = parseFloat($(data[3]).text());
            const type = $(data[4]).text();
            const location = $(data[6]).text();
            const id = Number($(data[7]).text());
            earthquakes.push(
                new EarthquakeInfo(
                    date_YYMMDD,
                    time,
                    latitude,
                    longitude,
                    depthInKm,
                    type,
                    magnitude,
                    location,
                    id
                )
            );   
        }
        return new EarthquakeResponse(response.status, response.statusText, earthquakes);
    }


}
