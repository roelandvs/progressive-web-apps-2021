const { overViewEndpoint } = require('./endpoints');
const { fetchAPI } = require('../helpers/fetchAPI');
const { turnToJSON } = require('../utils/turnToJSON');

function dataTransformation() {
    return fetchAPI(overViewEndpoint)
        .then(turnToJSON)
};

module.exports = { dataTransformation };