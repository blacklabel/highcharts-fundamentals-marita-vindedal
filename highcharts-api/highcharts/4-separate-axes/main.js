const categories = ['Dep1','Dep2', 'Dep3', 'Dep4', 'Dep5'];
    data = [50, 36, 50, 40, 14],
    nonData = [32, 43, 55, 78, 12]
    max = 100,
    maxColor = '#FF0000',
    seriesColor = '#A1B5C9'

Highcharts.chart('container', {
    chart: {
        type: 'bar',
        marginTop: 50,
        events: {
            // Probably need to do something here with the labels
        }
    },
    title: {
        text: 'Exercise 4'
    },
    legend: {
        enabled: false
    },
    xAxis: [{
        labels: {
            align: 'left',
        },
        categories: categories,
        left: '50%',
        lineWidth: 0
    }],
    yAxis: [{
        max: max,
        left: '0%',
        width: '40%',
        reversed: true,
        title: {
            text: 'Managerial Position',
        }
    }, {
        max: max,
        left: '60%',
        width: '40%',
        offset: 0,
        title: {
            text: 'Non Managerial Position',
        }
    }],
    plotOptions: {
        series: {
            stacking: 'normal'
        },
        bar: {
            dataLabels: {
                enabled: true,
                format: '{y}%'
            },
        }
    },
    series: [{
        data: data.map((val) => max - val),
        color: maxColor,
        dataLabels: {
            enabled: false
        },
        enableMouseTracking: false
      }, {
        yAxis: 1,
        data: nonData.map((val) => max - val),
        color: maxColor,
        dataLabels: {
            enabled: false
        },
        enableMouseTracking: false,
      }, {
        name: 'Managerial Position',
        data: data,
        color: seriesColor,
        dataLabels: {
            align: 'right'
        }
    }, {
        name: 'Non Managerial Position',
        yAxis: 1,
        data: nonData,
        color: seriesColor,
        dataLabels: {
            align: 'left'
        }
    }]
});