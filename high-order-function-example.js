function somar(x, y) {
  return x + y;
};

function subtrair(x, y) {
  return x - y;
};

function multiplicar(x, y) {
  return x * y;
};

function dividir(x, y) {
  return x / y;
};

function calcular(op, x, y) {
  return op(x, y);
};

calcular(somar, 400, 20); // 420
calcular(subtrair, 700, 34); // 666
calcular(multiplicar, 333, 2); // 666
calcular(dividir, 840, 2); // 420
