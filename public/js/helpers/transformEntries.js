function transformEntries(dataset) {
    const launch = dataset.launchInfo;
    const launchpad = dataset.launchPadInfo;
    const rocket = dataset.rochetInfo;
    const payload = dataset.payloadInfo;

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

    return dataset;
};

module.exports = { transformEntries };