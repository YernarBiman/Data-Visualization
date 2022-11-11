async function build() {
    // In my laptop the code is not reading csv file. So I put the data into the server, and from there read. 
    const scvData = await d3.csv("https://firebasestorage.googleapis.com/v0/b/welcomemyshymkent.appspot.com/o/data.csv?alt=media&token=71f83590-c170-4972-bb8a-f6a95f995e3b");
    
    let objArray = Object.entries(scvData), newData = []
    for (let i = 0; i < objArray.length; i++) {
        const row = objArray[i][1];
        const targets = scvData.columns.slice(1);
        const source = Object.values(row)[0];
        let tempArray = []
        for (let j = 0; j < targets.length; j++) {
            tempArray.push({ id: source + "-" + targets[j], x: j, y: i, weight: parseInt(objArray[i][1][targets[j]] || "0") })
        }
        newData.push(tempArray.slice(0, objArray.length))
    }

    const data = newData.slice(0, objArray.length - 1).flat()


  
  const rowNames = Object.values(scvData)
    .map((value) => Object.values(value)[0])
        .slice(0, scvData.length);

  const headers = scvData.columns.slice(1);

  const dimension = {
    width: window.innerWidth * 0.8,
    height: window.innerWidth * 0.8,
    margin: {
      top: 350,
      right: 10,
      bottom: 10,
      left: 500,
    },
  };

  dimension.boundedWidth =
    dimension.width - dimension.margin.right - dimension.margin.left;

  dimension.boundedHeight =
    dimension.height - dimension.margin.top - dimension.margin.bottom;

  const wrapper = d3
    .select("#wrapper")
    .append("svg")
    .attr("width", dimension.width)
    .attr("height", dimension.height);

  const bounds = wrapper
    .append("g")
    .style(
      "transform",
      `translate(${dimension.margin.left}px,${dimension.margin.top}px)`
    );
  const pole = bounds
    .selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", "grid")
    .attr("width", 25)
    .attr("height", 25)
    .attr("x", (d) => d.x * 25)
    .attr("y", (d) => d.y * 25)
    .style("fill-opacity", (d) => d.weight * 0.2);

  const namesX = wrapper
    .append("g")
    .attr(
      "transform",
      `translate(500,345)`
    )
    .selectAll("text")
    .data(headers)
    .enter()
    .append("text")
    .attr("y", (d, i) => i * 25 + 12.5)
    .text((d) => d)
    .style("text-anchor", "start")
    .attr("transform", "rotate(270)");

  const namesY = wrapper
    .append("g")
    .attr(
      "transform",
      `translate(490,350)`
    )
    .selectAll("text")
    .data(rowNames)
    .enter()
    .append("text")
    .attr("y", (d, i) => i * 25 + 12.5)
    .text((d) => d)
    .style("text-anchor", "end");
}

build();
