function filterEntries(originalEndpoint, secondEndpoints) {
    const launchDataset = originalEndpoint;
    let payloadDataset;
    let launchpadDataset;
    let rocketDataset;

    if (secondEndpoints.length === 3) {
        payloadDataset = secondEndpoints[0];
        launchpadDataset = secondEndpoints[1];
        rocketDataset = secondEndpoints[2];
    } else {
        launchpadDataset = secondEndpoints[0];
        rocketDataset = secondEndpoints[1];
    };

    const cleanObject = {
        launch: {
            launch_date_local: launchDataset.date_local,
            launch_date_precision: launchDataset.date_precision,
            launch_number: launchDataset.flight_number,
            launch_name: launchDataset.name,
            launch_details: launchDataset.details,
            launch_links: launchDataset.links,
        },
        payload: payloadDataset ? {
            customers: payloadDataset.customers,
            dragon: payloadDataset.dragon,
            manufacturers: payloadDataset.manufacturers,
            mass_kg: payloadDataset.mass_kg,
            name: payloadDataset.name,
            nationality: payloadDataset.nationalities,
            orbit: payloadDataset.orbit,
            type: payloadDataset.type,
        } : null,
        launchpad: {
            name: launchpadDataset.name,
            name_full: launchpadDataset.full_name,
            details: launchpadDataset.details,
            attempts: launchpadDataset.launch_attempts,
            successes: launchpadDataset.launch_successes,
            lng: launchpadDataset.longitude,
            lat: launchpadDataset.latitude,
            region: launchpadDataset.region,
            location: launchpadDataset.locality,
        },
        rocket: {
            name: rocketDataset.name,
            mass_kg: rocketDataset.mass.kg,
            height: rocketDataset.height,
            succes_pct: rocketDataset.success_rate_pct,
            boosters: rocketDataset.boosters,
            cost_per_launch: rocketDataset.cost_per_launch,
            description: rocketDataset.description,
            diameter: rocketDataset.diameter,
            first_flight: rocketDataset.first_flight,
            payload_weights: rocketDataset.payload_weights,
            images: rocketDataset.flickr_images,
            engine: {
                layout: rocketDataset.engines.layout,
                number: rocketDataset.engines.number,
                layout: rocketDataset.engines.layout,
            },
            stages: {
                number: rocketDataset.stages,
                first: rocketDataset.first_stage,
                second: rocketDataset.second_stage,
            }
        }
    };

    return cleanObject;
};

module.exports = { filterEntries }