$(document).ready(function() {
    $.ajax({
        url: "http://localhost:8080/types",
        dataType: 'json'
    }).then(function(data) {
      console.log(data);
      $.each(data, function(i){
              $('#tablaTipoCursos tr:last').after('<tr id="TR'+data[i].idCourseType+'"><td>'+data[i].name+'</td><td><a href="#"><i id="'+data[i].idCourseType+'" class="icon-trash"></i></a></td></tr>');
            });
    });


    $('#tablaTipoCursos').click(function(event){

      var data = '{"idCourseType":'+event.target.id+'}';

      //inserción del tipo
      $.ajax({
        headers: {
          'Content-type': 'application/json'
        },
        'type': 'DELETE',
        'url': 'http://localhost:8080/types/delete/',
        'data': data,
        'dataType': 'json',
        'success': function(result){

        }
      });
      //Fin de llamada Ajax
      $('#TR'+event.target.id).remove();
    });

    $('#grabar').click(function(event){
      var value = $(this).val();
      var data = '{"name":"'+$('#name').val()+'"}';

      //inserción del tipo
      $.ajax({
        headers: {
          'Content-type': 'application/json'
        },
        'type': 'POST',
        'url': 'http://localhost:8080/types/new',
        'data': data,
        'dataType': 'json',
        'success': function(){
          //Interrumpimos el comportamiento predeterminado del submit
          event.preventDefault();
        }
      });
      //Fin de llamada Ajax
    });






});
