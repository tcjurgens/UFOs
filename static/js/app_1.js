// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");     // look for <tbody> tags in html


function buildTable(data) {
    tbody.html("");   // tells js to use an empty string when creating the table

    // loop through each object in the data and append a row and cells for each val
    data.forEach((dataRow) => { // forEach works only for arrays,// can also be comb. w arrow funcs
        // variable that will append a row to the table body
        let row = tbody.append("tr");

        // Loop through each field in the dataRow and add each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {    // val argument holds all info in sighting
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });

}
// filter data 
function handleClick() {
    // grabs datetime val from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    // filter datausing the date selected
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    // builds table using the filtered data
    buildTable(filteredData);
};

d3.selectAll("#filter-btn").on("click", handleClick);   // selector string contains the id for the html tag
buildTable(tableData)