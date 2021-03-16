function transformEntries(dataset) {
    const launch = dataset.launch;
    const rocket = dataset.rocket;
    const payload = dataset.payload;

    const dateParts = launch.launch_date_local.split('T');
    const launchName = launch.launch_name.includes(' (v1.0)') ? 
        launch.launch_name.replace(' (v1.0)', '') : 
        launch.launch_name;
    const redditHref = 
        launch.launch_links.reddit.campaign ?
        launch.launch_links.reddit.campaign :
        launch.launch_links.reddit.recovery;

    launch.launch_name = launchName;
    launch.launch_date = dateParts[0];
    launch.launch_time = dateParts[1].substring(0,5);
    launch.reddit_link = redditHref;
    rocket.cost_per_launch = '$' + rocket.cost_per_launch.toLocaleString('de-DE');
    rocket.succes_pct = rocket.succes_pct + '%';
    rocket.mass_kg = rocket.mass_kg.toLocaleString('de-DE') + ' KG';
    rocket.height.meters = rocket.height.meters + ' M';
    rocket.diameter.meters = rocket.diameter.meters + ' M';
    
    if (payload.mass_kg !== null) {
        payload.mass_kg = payload.mass_kg.toLocaleString('de-DE') + ' KG';
    };

    return dataset;
};

module.exports = { transformEntries };