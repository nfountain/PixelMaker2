// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
  // Your code goes here!
}

//allows js & jquery files to load. Maybe make it a fun effect while the js files load, later.
$(document).ready(function() {
    console.log("Ready");
  });
  
  let grid = $("#pixelCanvas");
  
  function makeGrid() {
    grid.empty();
    let buildRow = $("#inputHeight").val();
    let buildCol = $("#inputWidth").val();
    for (let i = 0; i < buildRow; i++) {
      grid.append("<tr></tr>");
    }
    for (let j = 0; j < buildCol; j++) {
      $("tr").append("<td></td>");
    }
  }
  
  //EVENT LISTENERS
  
  //event listener for submit button (ID added to html in case I add more buttons)
  const submit = $("#submitButton");
  
  submit.click(function(event) {
    event.preventDefault();
    makeGrid();
  });
  
  //event listener for colorPicker
  let color = $("#colorPicker");
  
  grid.on("click", "td", function() {
    $(this).css("background-color", color.val());
  });
  /*
  grid.on("dblclick", "td", function() {
    $(this).css("background-color", rgb(255,255,255));
  });
  */
  //find a way to toggle the 'background-color' back to white...
  // RESOURCES
  // https://stackoverflow.com/questions/3910736/how-to-call-multiple-javascript-functions-in-onclick-event/34216918
  // https://api.jquery.com/toggle-event/
  // can I clear by changing background-color to "" ?