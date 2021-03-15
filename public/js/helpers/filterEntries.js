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
        launchInfo: {
            launch_date_utc: launchDataset.date_utc,
            launch_date_precision: launchDataset.date_precision,
            launch_number: launchDataset.flight_number,
            launch_name: launchDataset.name,
            launch_details: launchDataset.details,
            launch_links: launchDataset.links,
        },
        payloadInfo: payloadDataset ? {
            customers: payloadDataset.customers,
            dragon: payloadDataset.dragon,
            manufacturers: payloadDataset.manufacturers,
            mass_kg: payloadDataset.mass_kg,
            payload_name: payloadDataset.name,
            nationality: payloadDataset.nationalities,
            payload_name: payloadDataset.name,
            orbit: payloadDataset.orbit,
            type: payloadDataset.type,
        } : null,
        launchpadInfo: {
            launchpad_name: launchpadDataset.name,
            launchpad_name_full: launchpadDataset.full_name,
            launchpad_details: launchpadDataset.details,
            launch_attempts: launchpadDataset.launch_attempts,
            launch_successes: launchpadDataset.launch_successes,
            long: launchpadDataset.longitude,
            lat: launchpadDataset.latitude,
            region: launchpadDataset.region,
            location: launchpadDataset.locality,
        },
        rocketInfo: {
            rocket_name: rocketDataset.name,
            rocket_mass_kg: rocketDataset.mass.kg,
            rocket_height: rocketDataset.height,
            rocket_succes_pct: rocketDataset.success_rate_pct,
            boosters: rocketDataset.boosters,
            cost_per_launch: rocketDataset.cost_per_launch,
            rocket_description: rocketDataset.description,
            rocket_diameter_meters: rocketDataset.diameter.meters,
            first_flight: rocketDataset.first_flight,
            payload_weights: rocketDataset.payload_weights,
            images: rocketDataset.flickr_images,
            engine: {
                engine_layout: rocketDataset.engines.layout,
                engine_number: rocketDataset.engines.number,
                engine_layout: rocketDataset.engines.layout,
            },
            stages: {
                stages_number: rocketDataset.stages,
                stages_first: rocketDataset.first_stage,
                stages_second: rocketDataset.second_stage,
            }
        }
    };

    return cleanObject;
};

module.exports = { filterEntries }