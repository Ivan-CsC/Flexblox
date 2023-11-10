var g = G$('Ivan', 'Campos', 'es');

g.greet().setLang('en').greet(true).log();

$('#login').click(function () {
  var loginGrtr = G$('Ivan', 'Campos');

  $('#logindiv').hide();

  loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
});
