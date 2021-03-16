const { currentEndpoint } = require('./endpoints');
const { fetchAPI } = require('../helpers/fetchAPI');
const { filterEntries } = require('../helpers/filterEntries');
const { transformEntries } = require('../helpers/transformEntries');
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
        .then(response => {
            return filterEntries(singleEndpoint, response);
        })
        .then(transformEntries)
        // .then(positionMain)
};

module.exports = { detailDataTransformation };