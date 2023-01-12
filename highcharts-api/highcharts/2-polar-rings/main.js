let arr = [];
let max = 0;

const createSeries = () => {
    // Create multidimensional array
    for (let i = 0; i < 3; i++){
        arr[i] = [];
        for(let j = 0; j < 5; j++){
            // Add values
            arr[i][j] = Math.floor((Math.random() * 10));
            // Find max value
            if(arr[i][j] > max){
                max = arr[i][j];
            }
            
        }
    }
}
createSeries();

Highcharts.chart('container', {
    chart: {
        type: 'column',
        polar: true
    },
    title: {
        text: 'Second exercise'
    },
    yAxis: {
        max: max*2,
        plotLines: [{
            value: max*1.5,
            width: 2,
            color: 'hotpink',
            dashStyle: 'LongDashDot'
        }, {
            value: max*1.8,
            width: 2,
            color: 'yellow',
            dashStyle: 'Dash'
        }, {
            value: max*2,
            width: 2,
            color: 'blue',
            dashStyle: 'ShortDashDotDot'
        }]
    },
    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: 'Max',
                filter: {
                    property: 'y',
                    operator: '===',
                    value: max
                }
            }
        }
    },
    series: [{
        name: 'Tokyo',
        data: arr[0]
    }, {
        name: 'New York',
        data: arr[1]
    }, {
        name: 'London',
        data: arr[2]
    }]
});