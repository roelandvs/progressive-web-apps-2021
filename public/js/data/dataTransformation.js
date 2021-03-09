import { fetchAPI } from '../helpers/fetchAPI'

const dataTransformation = () => {
   fetchAPI(overViewEndpoint)
    .then(console.log)
};

module.exports = { dataTransformation };