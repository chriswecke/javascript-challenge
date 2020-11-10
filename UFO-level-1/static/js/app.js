// from data.js
var tableData = data;
console.log(tableData);

// Get a reference to the table body
var tbody = d3.select("tbody");

 // Step 1: Loop Through `data` and console.log each weather report object
 tableData.forEach(function(ufoSighting) {
   console.log(ufoSighting);
   //append one row 'tr' for each UFO sighting event
   var row = tbody.append("tr");

   //  Step 2:  Use `Object.entries` to console.log each UFO sighting value
    Object.entries(ufoSighting).forEach(function([key, value]) {
   console.log(key, value);
   //Append a cell to the row for each value
   var cell = row.append("td");
   cell.text(value);
   });
 });

 // Getting a reference to the button on the page with the id property set to `filter-btn`
var button = d3.select("#filter-btn");
button.on("click", function() {

    tbody.html("");

     // Select the input date get the raw HTML nodes
     var inputElement = d3.select("#datetime");
     // Get the value property of the input date, state, shape
     var inputValue = inputElement.property("value");
     // console.log input value
     console.log(inputValue);
     // Filter Data with datetime equal to input value
     var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
     // console.log filter values
     console.log(filteredData);

     filteredData.forEach(function(selections) {

        console.log(selections);
        // Append one table row `tr` for each UFO Sighting object
        var row = tbody.append("tr");
        // Use `Object.entries` to console.log each UFO Sighting value
        Object.entries(selections).forEach(function([key, value]) {
            console.log(key, value);
            // Append a cell to the row for each value
            var cell = row.append("td");
            cell.text(value);
        });
    });
    });

    // Get the input field
//var input = document.getElementById("#datetime");

// Execute a function when the user releases a key on the keyboard
//input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  //if (event.keyCode === 13) {
    // Cancel the default action, if needed
    //event.preventDefault();
    // Trigger the button element with a click
    //document.getElementById("#filter-btn").click();
  //}
//});
