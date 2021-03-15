const { overViewEndpoint } = require('./endpoints');
const { fetchAPI } = require('../helpers/fetchAPI');
const { turnToJSON } = require('../utils/turnToJSON');
const { formatMonths } = require('../helpers/formatMonths');

function dataTransformation() {
    return fetchAPI(overViewEndpoint)
        .then(turnToJSON)
        .then(formatMonths)
};

module.exports = { dataTransformation };