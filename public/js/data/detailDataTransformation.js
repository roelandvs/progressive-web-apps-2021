const { currentEndpoint } = require('./endpoints');
const { fetchAPI } = require('../helpers/fetchAPI');
const { 
    turnToJSON, 
    turnMultipleToJSON 
} = require('../utils/turnToJSON');

function detailDataTransformation(id) {
    let singleEndpoint;
    let detailEndpoints;

    return fetchAPI(currentEndpoint, id)
        .then(turnToJSON)
        .then(response => {
            singleEndpoint = response;
            detailEndpoints = response.payloads[0] ? 
            [
                '/payloads/' + response.payloads[0],
                '/launchpads/' + response.launchpad,
                '/rockets/' + response.rocket,
            ] : 
            [
                '/launchpads/' + response.launchpad,
                '/rockets/' + response.rocket,
            ];

            return fetchAPI(response, id, detailEndpoints);
        })
        .then(turnMultipleToJSON)
        .then()
        // .then(console.log)
};

module.exports = { detailDataTransformation };