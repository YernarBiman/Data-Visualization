async function buildPlot() {
    console.log("Hello world");
    const data = await d3.json("my_weather_data.json");
    //console.table(data);
    let min = function () {
        const dateParser = d3.timeParse("%Y-%m-%d");
        const yAccessor = (d) => d.temperatureMin;
        const xAccessor = (d) => dateParser(d.date);
        // Функции для инкапсуляции доступа к колонкам набора данных

        var dimension = {
            width: window.innerWidth * 0.9,
            height: 400,
            margin: {
                top: 15,
                left: 15,
                bottom: 15,
                right: 15
            }
        };

        dimension.boundedWidth = dimension.width - dimension.margin.left - dimension.margin.right;
        dimension.boundedHeight = dimension.height - dimension.margin.top - dimension.margin.bottom;

        const wrapper = d3.select("#wrapper");

        var x = d3.scaleLinear()
            .range([0, dimension.width]);
        var y = d3.scaleTime()
            .rangeRound([0, dimension.height], 0.1);

        var xAxis = d3.axisTop()
            .scale(x);
        var yAxis = d3.axisLeft()
            .scale(y);

        const svg = wrapper.append("svg")
        svg.attr("height", dimension.height);
        svg.attr("width", dimension.width);

        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + dimension.height + ")")
            .call(xAxis);

        // Add the Y Axis
        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis);

        const bounded = svg.append("g");
        bounded.style("transform", `translate(${dimension.margin.left}px, ${dimension.margin.top})`);

        const yScaler = d3.scaleLinear()
            .domain(d3.extent(data, yAccessor))
            .range([dimension.boundedHeight, 0]);

        const xScaler = d3.scaleTime()
            .domain(d3.extent(data, xAccessor))
            .range([0, dimension.boundedWidth]);

        var lineGenerator = d3.line()
            .x(d => xScaler(xAccessor(d)))
            .y(d => yScaler(yAccessor(d)));

        let path = bounded.append("path")
        path.attr("d", lineGenerator(data))
        // .attr("fill","none")
        path.attr("stroke", "lightgrey")
    }
    let max = function () {
        const dateParser = d3.timeParse("%Y-%m-%d");
        const yAccessor = (d) => d.temperatureHigh;
        const xAccessor = (d) => dateParser(d.date);
        // Функции для инкапсуляции доступа к колонкам набора данных

        var dimension = {
            width: window.innerWidth * 0.9,
            height: 400,
            margin: {
                top: 15,
                left: 15,
                bottom: 15,
                right: 15
            }
        };

        dimension.boundedWidth = dimension.width - dimension.margin.left - dimension.margin.right;
        dimension.boundedHeight = dimension.height - dimension.margin.top - dimension.margin.bottom;

        const wrapper = d3.select("#wrapper2");

        var x = d3.scaleLinear()
            .range([0, dimension.width]);
        var y = d3.scaleTime()
            .rangeRound([0, dimension.height], 0.1);

        var xAxis = d3.axisTop()
            .scale(x);
        var yAxis = d3.axisLeft()
            .scale(y);

        const svg = wrapper.append("svg")
        svg.attr("height", dimension.height);
        svg.attr("width", dimension.width);

        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + dimension.height + ")")
            .call(xAxis);

        // Add the Y Axis
        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis);

        const bounded = svg.append("g");
        bounded.style("transform", `translate(${dimension.margin.left}px, ${dimension.margin.top})`);

        const yScaler = d3.scaleLinear()
            .domain(d3.extent(data, yAccessor))
            .range([dimension.boundedHeight, 0]);

        const xScaler = d3.scaleTime()
            .domain(d3.extent(data, xAccessor))
            .range([0, dimension.boundedWidth]);

        var lineGenerator = d3.line()
            .x(d => xScaler(xAccessor(d)))
            .y(d => yScaler(yAccessor(d)));

        let path = bounded.append("path")
        path.attr("d", lineGenerator(data))
        // .attr("fill","none")
        path.attr("stroke", "lightgrey")
    }
    min()
    max()
}

buildPlot();