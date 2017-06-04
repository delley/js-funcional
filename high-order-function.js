// Crie uma função que multiplique recebendo 3 parâmetros.
// Onde op será a operação de somar do nosso exemplo passado.
function _multiplicar(op, valor, vezes){
  var sum = valor;
  for(i=1; i<vezes; i++){
    sum = op(sum, valor);
  }
  return sum;
};

// Depois de fazer isso para multiplicar faça também para dividir.
function _dividir(op, dividendo, divisor){
  var resto = dividendo;
  var quociente = 0;
  while(resto >= divisor) {
    resto = op(resto, divisor);
    quociente++;
  }

  return quociente;
};
