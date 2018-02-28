$(function() {
  
    $('.drag-city').draggable();
    
    $('#droppable').droppable({
        drop: function() {
            $('#draggable').text("Оставлено")
        }
    });
  
});


