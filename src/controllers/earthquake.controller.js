import EarthquakeWrapper from "../services/earthquake_wrapper.js";


async function getLastEarthquakes(req, res, next) {
    let result;
    if (req.query.limit == null) {
        console.error(`Error: limit required in query`);
        return res.json({Error:"limit query required"});
    }

    try {
        if (req.query.min_magnitude == null) {
            result = await EarthquakeWrapper.getLastEarthquakes(req.query.limit);
        } else {
            result = await EarthquakeWrapper.getLastEarthquakesOverMagnitude(req.query.limit,req.query.min_magnitude);
        }
        res.json(result);
    } catch (err) {
        res.json({"Error":err.message});
        next(err);
    }
}

export {
    getLastEarthquakes
};