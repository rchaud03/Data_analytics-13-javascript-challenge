// from data.js
var tableData = data;

// YOUR CODE HERE!

// Create table body variable
var tbody = d3.select("tbody");

// Building table rows
function tableRows(tableData){
    tbody.html("");

    //For each entry add row to HTML with the arrow function
    tableData.forEach(data_entry => {
        var row = tbody.append("tr");
        Object.entries(data_entry).forEach(([key,value]) => {
            var cell = row.append("td");
            cell.text(value);
        })
    });
};

// Filter data from the table
var button = d3.select("#filter-btn")

button.on("click", function() {
    // To prevent the page from refreshing
    d3.event.preventDefault();

    var filterDate = d3.select("#datetime");

    var inputDate = filterDate.property("value").trim();

    var filteredDate = tableData.filter(tableData=>tableData.datetime === inputDate);


    tbody.html("")

    var result = {
        filteredDate
    }

    if (result.filteredDate.length !=0){
        tableRows(filteredDate);
    }
        else {
            tbody.append("tr").append("td").text("None Found! Try again ")
        }

});

tableRows(tableData);

var resetBtn = d3.select("#reset-btn")
resetBtn.on("click", function() {
    tbody.html("");
    tableRows(tableData)
});
