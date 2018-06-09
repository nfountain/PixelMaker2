//allows js & jquery files to load. Maybe make it a fun effect while the js files load, later.
$(document).ready(function() {
  console.log("Ready");
  
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
    $(this).css("backgroundColor", color.val());
  });
});
