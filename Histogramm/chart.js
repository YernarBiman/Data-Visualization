function functionName(temp) {
    d3.selectAll('svg').remove(); // removes the all graph
    if (temp == '1') {
        async function buildPlot() {
            // From my laptop I can not upload json file. So I have upload it to server then from there I have taken it
            const data = await d3.json("https://firebasestorage.googleapis.com/v0/b/welcomemyshymkent.appspot.com/o/my_weather_data.json?alt=media&token=70b0cacb-33c7-4ada-9ccd-de2cb34b1a4bjson");


            // dimensions and margins of the graph
            var margin = { top: 30, right: 30, bottom: 30, left: 70 },
                width = 460 - margin.left - margin.right,
                height = 400 - margin.top - margin.bottom;

            // appending the svg object to the body of the page
            var svg = d3.select("#my_dataviz")
                .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom + 10)
                .append("g")
                .attr("transform",
                    "translate(" + margin.left + "," + margin.top + ")");

            // X axis
            var x = d3.scaleLinear()
                .domain([-10, d3.max(data, function (d) { return +d.temperatureMin }) + 30])
                .range([0, width]);
            svg.append("g")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(x));

            // parameters for the histogram
            var histogram = d3.histogram()
                .value(function (d) { return d.temperatureMin; })   
                .domain(x.domain())  
                .thresholds(x.ticks(10));

            // function to get the bins
            var bins = histogram(data);

            // Y axis
            var y = d3.scaleLinear()
                .range([height, 0]);
            y.domain([0, d3.max(bins, function (d) { return d.length; })]);   
            svg.append("g")
                .call(d3.axisLeft(y));


            // append the bar rectangles to the svg element
            svg.selectAll("rect")
                .data(bins)
                .enter()
                .append("rect")
                .attr("x", 1)
                .attr("transform", function (d) { return "translate(" + x(d.x0) + "," + y(d.length) + ")"; })
                .attr("width", function (d) { return x(d.x1) - x(d.x0) - 1; })
                .attr("height", function (d) { return height - y(d.length); })
                .style("fill", "#0000FF")
            // Xlabel
            svg.append("text")
                .attr("class", "x label")
                .attr("text-anchor", "end")
                .attr("x", width)
                .attr("y", height + 30)
                .text("Temperature");
            //Ylabel
            svg.append("text")
                .attr("class", "y label")
                .attr("text-anchor", "end")
                .attr("y", -20)
                .attr("dy", ".75em")
                .text("Count");
            //Title
            svg.append("text")
                .attr("x", (width / 2))
                .attr("y", 0 - (margin.top / 2))
                .attr("text-anchor", "middle")
                .style("font-size", "16px")
                .text("Temperature Min");

        }

        buildPlot();
    }

    if (temp == '2') {
        async function buildPlot() {

            const data = await d3.json("https://firebasestorage.googleapis.com/v0/b/welcomemyshymkent.appspot.com/o/my_weather_data.json?alt=media&token=70b0cacb-33c7-4ada-9ccd-de2cb34b1a4bjson");

            var margin = { top: 30, right: 30, bottom: 30, left: 70 },
                width = 460 - margin.left - margin.right,
                height = 400 - margin.top - margin.bottom;

            var svg = d3.select("#my_dataviz")
                .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom + 10)
                .append("g")
                .attr("transform",
                    "translate(" + margin.left + "," + margin.top + ")");

            var x = d3.scaleLinear()
                .domain([-10, d3.max(data, function (d) { return +d.temperatureMax }) + 30])
                .range([0, width]);
            svg.append("g")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(x));

            var histogram = d3.histogram()
                .value(function (d) { return d.temperatureMax; })
                .domain(x.domain())
                .thresholds(x.ticks(10));

            var bins = histogram(data);

            var y = d3.scaleLinear()
                .range([height, 0]);
            y.domain([0, d3.max(bins, function (d) { return d.length; })]);
            svg.append("g")
                .call(d3.axisLeft(y));

            svg.selectAll("rect")
                .data(bins)
                .enter()
                .append("rect")
                .attr("x", 1)
                .attr("transform", function (d) { return "translate(" + x(d.x0) + "," + y(d.length) + ")"; })
                .attr("width", function (d) { return x(d.x1) - x(d.x0) - 1; })
                .attr("height", function (d) { return height - y(d.length); })
                .style("fill", "#0000FF")

            svg.append("text")
                .attr("class", "x label")
                .attr("text-anchor", "end")
                .attr("x", width)
                .attr("y", height + 30)
                .text("Temperature");

            svg.append("text")
                .attr("class", "y label")
                .attr("text-anchor", "end")
                .attr("y", -20)
                .attr("dy", ".75em")
                .text("Count");

            svg.append("text")
                .attr("x", (width / 2))
                .attr("y", 0 - (margin.top / 2))
                .attr("text-anchor", "middle")
                .style("font-size", "16px")
                .text("Temperature Max");

        }

        buildPlot();

    }

    if (temp == '3') { 
        async function buildPlot() {

            const data = await d3.json("https://firebasestorage.googleapis.com/v0/b/welcomemyshymkent.appspot.com/o/my_weather_data.json?alt=media&token=70b0cacb-33c7-4ada-9ccd-de2cb34b1a4bjson");

            var margin = { top: 30, right: 30, bottom: 30, left: 70 },
                width = 460 - margin.left - margin.right,
                height = 400 - margin.top - margin.bottom;

            var svg = d3.select("#my_dataviz")
                .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom + 10)
                .append("g")
                .attr("transform",
                    "translate(" + margin.left + "," + margin.top + ")");

            var x = d3.scaleLinear()
                .domain([-10, d3.max(data, function (d) { return +d.temperatureLow }) + 30])
                .range([0, width]);
            svg.append("g")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(x));

            var histogram = d3.histogram()
                .value(function (d) { return d.temperatureLow; })
                .domain(x.domain())
                .thresholds(x.ticks(10));

            var bins = histogram(data);

            var y = d3.scaleLinear()
                .range([height, 0]);
            y.domain([0, d3.max(bins, function (d) { return d.length; })]);
            svg.append("g")
                .call(d3.axisLeft(y));

            svg.selectAll("rect")
                .data(bins)
                .enter()
                .append("rect")
                .attr("x", 1)
                .attr("transform", function (d) { return "translate(" + x(d.x0) + "," + y(d.length) + ")"; })
                .attr("width", function (d) { return x(d.x1) - x(d.x0) - 1; })
                .attr("height", function (d) { return height - y(d.length); })
                .style("fill", "#0000FF")

            svg.append("text")
                .attr("class", "x label")
                .attr("text-anchor", "end")
                .attr("x", width)
                .attr("y", height + 30)
                .text("Temperature");

            svg.append("text")
                .attr("class", "y label")
                .attr("text-anchor", "end")
                .attr("y", -20)
                .attr("dy", ".75em")
                .text("Count");

            svg.append("text")
                .attr("x", (width / 2))
                .attr("y", 0 - (margin.top / 2))
                .attr("text-anchor", "middle")
                .style("font-size", "16px")
                .text("Temperature Low");

        }

    buildPlot();
    }

    if (temp == '4') {
        async function buildPlot() {

            const data = await d3.json("https://firebasestorage.googleapis.com/v0/b/welcomemyshymkent.appspot.com/o/my_weather_data.json?alt=media&token=70b0cacb-33c7-4ada-9ccd-de2cb34b1a4bjson");

            var margin = { top: 30, right: 30, bottom: 30, left: 70 },
                width = 460 - margin.left - margin.right,
                height = 400 - margin.top - margin.bottom;

            var svg = d3.select("#my_dataviz")
                .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom + 10)
                .append("g")
                .attr("transform",
                    "translate(" + margin.left + "," + margin.top + ")");

            var x = d3.scaleLinear()
                .domain([-10, d3.max(data, function (d) { return +d.temperatureHigh }) + 30])
                .range([0, width]);
            svg.append("g")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(x));

            var histogram = d3.histogram()
                .value(function (d) { return d.temperatureHigh; })  
                .domain(x.domain())  
                .thresholds(x.ticks(10)); 

            var bins = histogram(data);

            var y = d3.scaleLinear()
                .range([height, 0]);
            y.domain([0, d3.max(bins, function (d) { return d.length; })]);  
            svg.append("g")
                .call(d3.axisLeft(y));

            svg.selectAll("rect")
                .data(bins)
                .enter()
                .append("rect")
                .attr("x", 1)
                .attr("transform", function (d) { return "translate(" + x(d.x0) + "," + y(d.length) + ")"; })
                .attr("width", function (d) { return x(d.x1) - x(d.x0) - 1; })
                .attr("height", function (d) { return height - y(d.length); })
                .style("fill", "#0000FF")

            svg.append("text")
                .attr("class", "x label")
                .attr("text-anchor", "end")
                .attr("x", width)
                .attr("y", height + 30)
                .text("Temperature");

            svg.append("text")
                .attr("class", "y label")
                .attr("text-anchor", "end")
                .attr("y", -20)
                .attr("dy", ".75em")
                .text("Count");

            svg.append("text")
                .attr("x", (width / 2))
                .attr("y", 0 - (margin.top / 2))
                .attr("text-anchor", "middle")
                .style("font-size", "16px")
                .text("Temperature High");

        }

        buildPlot();
    }
}