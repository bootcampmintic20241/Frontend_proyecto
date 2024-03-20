var data = [
    {
        x: ['giraffes', 'orangutans', 'monkeys'],
        y: [20, 14, 23],
        type: 'bar'
    }
];

var layout = {
    height: 400,
    width: 500
};

Plotly.newPlot('myDiv', data, layout);
