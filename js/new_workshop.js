$(document).ready(function() {

  $.ajax({
      url: "http://localhost:8080/types",
      dataType: 'json'
  }).then(function(data) {
    console.log(data);
    $.each(data, function(i){
            //$('#tablaCursos tr:last').after('<tr><td style="text-align: center">'+data[i].ddate+'<td><td style="text-align:center"><a href="#" id="a'+data[i].idCourse+'" target="blank">OpenShift - Beginners</a></td></tr>');
            $('#courseType').append('<option value="'+data[i].idCourseType+'">'+data[i].name+'</option>');
          });
  });

  $.ajax({
      url: "http://localhost:8080/levels",
      dataType: 'json'
  }).then(function(data) {
    console.log(data);
    $.each(data, function(i){
            //$('#tablaCursos tr:last').after('<tr><td style="text-align: center">'+data[i].ddate+'<td><td style="text-align:center"><a href="#" id="a'+data[i].idCourse+'" target="blank">OpenShift - Beginners</a></td></tr>');
            $('#courseLevel').append('<option value="'+data[i].idCourseLevel+'">'+data[i].name+'</option>');
          });
  });



    $('#enviar').click(function(event){
      var value = $(this).val();

      //var data = '{"name":"'+$('#name').val()+'"}';
      //'{"ddate":"2016-04-25","places":"15","active":"1","courseLevel":{"idCourseLevel":"1"},"courseType":{"idCourseType":"1"}}'
      var data = '{"ddate":"'+$('#ddate').val()+'","places":"'+$('#places').val()+'","active":"1","courseLevel":{"idCourseLevel":"'+$('#courseLevel').val()+'"},"courseType":{"idCourseType":"'+$('#courseType').val()+'"}}';
      //alert(data);

      //inserción del tipo
      $.ajax({
        headers: {
          'Content-type': 'application/json'
        },
        'type': 'POST',
        'url': 'http://localhost:8080/course/new',
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
