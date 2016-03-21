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


  $('#cursos').change(function(){
    var value = $(this).val();
    $('#tablaCursos tr').empty();

    $.ajax({
        url: "http://localhost:8080/courses/"+value,
        dataType: 'json'
    }).then(function(data) {
      console.log(data);
      $('#tablaCursos tr:last').after('<tr id="TR'+data.idCourse+'"><td style="text-align: center">'+data.places+'<td><td style="text-align:center">'+data.ddate+'</td><td style="text-align:center">'+data.courseType.name+'</td><td style="text-align:center">'+data.courseLevel.name+'</td><td><a href="#"><i id="'+data.idCourse+'" class="icon-trash"></i></a></td></tr>');

    });
  });


  //
  $('#tablaCursos').click(function(event){

    var data = '{"idCourse":'+event.target.id+'}';
    
    //Llamada ajax
    $.ajax({
      headers: {
        'Content-type': 'application/json'
      },
      'type': 'DELETE',
      'url': 'http://localhost:8080/course/delete/',
      'data': data,
      'dataType': 'json',
      'success': function(result){

      }
    });
    //Fin de llamada Ajax
    $('#TR'+event.target.id).remove();
  });


});
