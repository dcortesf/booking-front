$(document).ready(function() {

  $.ajax({
      url: "http://localhost:8080/courses",
      dataType: 'json'
  }).then(function(data) {
    console.log(data);
    $.each(data, function(i){
            //$('#tablaCursos tr:last').after('<tr><td style="text-align: center">'+data[i].ddate+'<td><td style="text-align:center"><a href="#" id="a'+data[i].idCourse+'" target="blank">OpenShift - Beginners</a></td></tr>');
            $('#cursos').append('<option value="'+data[i].idCourse+'">'+data[i].ddate+' '+data[i].courseType.name+' ('+data[i].courseLevel.name+')</option>');
          });
  });

  ///

  $('#cursos').change(function(){
    var value = $(this).val();

    $.ajax({
        url: "http://localhost:8080/bookingbycourse/"+value,
        dataType: 'json'
    }).then(function(data) {
      console.log(data);
      $('#tablaAlumnos tr').empty();
      $.each(data, function(i){
              $('#tablaAlumnos tr:last').after('<tr id="TR'+data[i].idBooking+'"><td style="text-align: center">'+data[i].name+'<td><td style="text-align:center">'+data[i].user+'</td><td style="text-align:center">'+data[i].email+'</td><td style="text-align:center">'+data[i].dni+'</td><td><a href="#"><i id="'+data[i].idBooking+'" class="icon-trash"></i></a></td></tr>');

      });
    });
  });

//




    $('#tablaAlumnos').click(function(event){

      var data = '{"idBooking":'+event.target.id+'}';

      //inserción del tipo
      $.ajax({
        headers: {
          'Content-type': 'application/json'
        },
        'type': 'DELETE',
        'url': 'http://localhost:8080/booking/delete/',
        'data': data,
        'dataType': 'json',
        'success': function(result){

        }
      });
    
      //Fin de llamada Ajax
      $('#TR'+event.target.id).remove();
    });

});
