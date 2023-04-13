
function alerted(){
  alert("Вы зарегестрированны ");
}

$(function() {
  $('#role').change(function () {
      var vibor = $(this).find(': selected').val();
      if(vibor == '"user') {
        $('.element').text('Контент 1');
      } else if(vibor == 'executor') {
        $('.element').text('Контент 2');
      } else if(vibor == 'manager') {
        $('.element').text('Контент 3');
      } 
  });

});
