// import data from data.js
const tableData = data;

// reference the HTML table using D3
var tbody = d3.select("tbody");

function buildTable(data) {
    
    // clear existing data by assigning an empty string
    tbody.html("");
    
    // loop through each object and add a row to contain values
    data.forEach((dataRow) => {
        
        // add row to table 
        let row = tbody.append("tr");
        
        // loop through each field and add value to table cell
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        }
     );
 });
}

function handleClick() { 
    let date = d3.select('#datetime').property('value');
    let filteredData = tableData;

    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    buildTable(filteredData);
}

d3.selectAll('#filter-btn').on('click', handleClick);

buildTable(tableData);
