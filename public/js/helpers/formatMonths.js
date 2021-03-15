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

        if (launch.date_precision === 'hour' || launch.date_precision === 'day' || launch.date_precision === 'month') {
            // month of launch
            month = new Date(launch.date_utc).getMonth();
        } else {
            //month = No date yet
            month = 12;
        };

        //adds zero to front if number < 10
        launch.launch_month = months[month].substring(0,3);
        launch.launch_day = ('0' + new Date(launch.date_unix * 1000).getDate()).slice(-2);
        launch.launch_hours = ('0' + new Date(launch.date_unix * 1000).getHours()).slice(-2);
        launch.launch_minutes = ('0' + new Date(launch.date_unix * 1000).getMinutes()).slice(-2);

        dataObject[months[month]].push(launch);
    })
    return dataObject;
};

module.exports = { formatMonths };