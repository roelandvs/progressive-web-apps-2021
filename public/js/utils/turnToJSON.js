function turnToJSON(response) {
    return response.json();
};

function turnMultipleToJSON(response) {
    return Promise.all(response.map(response => response.json()));
};

module.exports = { 
    turnToJSON, 
    turnMultipleToJSON 
};