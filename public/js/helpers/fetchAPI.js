function fetchAPI(endpoint, id, detailEndpoints) {
    const baseUrl = 'https://api.spacexdata.com/v4';

    //checks what needs to be fetched: all launches, one specific launch or endpoints within specific launch
    if (!id && !detailEndpoints) {
        const spaceXDataset = fetch(baseUrl + endpoint);
        return (spaceXDataset);
    } else if (id && !detailEndpoints) {
        const currentDataset = fetch(baseUrl + endpoint + id);
        return currentDataset;
    } else {
        const SpacexDetailDatasets = detailEndpoints.map(singleEndpoint => fetch(baseUrl + singleEndpoint));
	    return Promise.all(SpacexDetailDatasets);
    }
};