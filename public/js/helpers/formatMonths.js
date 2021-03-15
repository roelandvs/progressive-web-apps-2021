function formatMonths(dataset) {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
        'No date yet',
    ];
    let dataObject = {};

    months.forEach(month => dataObject[month] = []);
    dataset.forEach(launch => {
        let month;

        //set launch date values
        if (launch.date_precision === 'hour' || launch.date_precision === 'day') {
            month = new Date(launch.date_utc).getMonth();
            launch.launch_day = ('0' + new Date(launch.date_unix * 1000).getDate()).slice(-2);
            launch.launch_month = months[month].substring(0,3);
        } else if (launch.date_precision === 'month') {
            month = new Date(launch.date_utc).getMonth();
            launch.launch_day = ' - ';
            launch.launch_month = months[month].substring(0,3);
        } else {
            //month = No date yet
            month = 12;
            launch.launch_day = ' - ';
            launch.launch_month = '';
        };

        //adds zero to front if number < 10
        launch.launch_hours = ('0' + new Date(launch.date_unix * 1000).getHours()).slice(-2);
        launch.launch_minutes = ('0' + new Date(launch.date_unix * 1000).getMinutes()).slice(-2);

        launch.name = launch.name.includes(' (v1.0)') ? 
            launch.name.replace(' (v1.0)', '') : 
            launch.name;

        dataObject[months[month]].push(launch);
    })
    return dataObject;
};

module.exports = { formatMonths };