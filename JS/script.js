/*confirm('Deseja acessar?');
prompt('teste');
alert('bem vindo');*/

var a = 4;
var b = 4;
if (a > b) {
  console.log(a + ' é maior do que ' + b);
} else {
  if (a < b) {
    console.log(a + ' é menor do que ' + b);
  } else {
    console.log(a + ' é igual a ' + b);
  }
}
//prettier-ignore
var r=1;
switch (r) {
  case 1:
    r = 'Domingo';
    break;
  case 2:
    r = 'Segunda-feira';
    break;
  case 3:
    r = 'Terca-feira';
    break;
  case 4:
    r = 'Quarta-feira';
    break;
  case 5:
    r = 'Quinta-feira';
    break;
  case 6:
    r = 'Sexta-feira';
    break;
  case 7:
    r = 'Sabado';
    break;

  default:
    r = 'Dia Inválido';
    console.log('Nenhuma dia da semana informado');
}
