$(document).ready(function() {
    $.ajax({
        url: "https://backend-globalpaas-pro.appls.boae.paas.gsnetcloud.corp/courses",
        dataType: 'json'
    }).then(function(data) {
      console.log(data);
      $.each(data, function(i){
              //$('#tablaCursos tr:last').after('<tr><td style="text-align: center">'+data[i].ddate+'<td><td style="text-align:center"><a href="#" id="a'+data[i].idCourse+'" target="blank">OpenShift - Beginners</a></td></tr>');
              $('#cursos').append('<option value="'+data[i].idCourse+'">'+data[i].ddate+'</option>');
            });
    });

    $('#cursos').change(function(){
      var value = $(this).val();

      $.ajax({
          url: "https://backend-globalpaas-pro.appls.boae.paas.gsnetcloud.corp/courses/bookingbycourse/"+value,
          dataType: 'json'
      }).then(function(data) {
        console.log(data);
        $('#tablaAlumnos tr').empty();
        $.each(data, function(i){
                $('#tablaAlumnos tr:last').after('<tr><td style="text-align: center">'+data[i].name+'<td><td style="text-align:center">'+data[i].user+'</td><td style="text-align:center">'+data[i].email+'</td><td style="text-align:center">'+data[i].dni+'</td></tr>');

        });
      });
    });
});
