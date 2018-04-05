const colorPicker = $("#colorPicker");
const submit = $("#button-submit");

$("#sizePicker").on("submit",function(event) {        event.preventDefault(); 
   makeGrid();
  });

function makeGrid() {
  const table = $("#pixelCanvas");
  let height = $("#inputHeight").val();
  let width = $("#inputWidth").val();
    $('table').children().remove(); 

  for (var r = 0; r < height; r++) {
    table.append("<tr></tr>");    
    
    for (var c = 0; c < width; c++) {
      table.children().last().append("<td class='grid'></td>");
    }
  }
  
  $(".grid").on("click", function (e) {
    e.target.style.backgroundColor=colorPicker[0].value
  console.log(colorPicker[0].value)
})
  $('#clearButton').on('click',function(){
  $('td').css('background-color','white');
});
  
  table.on("dblclick", "td", function() {
		$(this).css("background-color", "#FFFFFF");
	});
  
};
