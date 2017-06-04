# JS Funcional
Estudos sobre programação funcional com JavaScript

## Funções de Primeira-Classe (First-class function)
Em JavaScript, funções são objetos de primeira classe, elas podem ter propriedades e métodos como qualquer outro objeto. O que difere as funções dos outros objetos é o fato de poderem ser chamadas/executadas.

```js
var twice = function (x) {console.log(2*x);};  
twice(7); //14
```

## Funções de Ordem Superior (High-order function)
Basicamente são funções que atuam/operam em outras funções, seja recebendo como parametro e/ou retornando uma função.

```js
// Recebe uma função como parâmetro => Higher Order
function inject(f, x){  
  return f(f(x));
}
```
## Hoisting

## Scope

## Closures

## Funções construtoras

## Callbacks

## Promise

## DOM

## Referências

* [WebSchool.io: Workshop JS Funcional Free](https://github.com/Webschool-io/workshop-js-funcional-free)

* [WebSchool.io: Canal no Youtube](https://www.youtube.com/c/webschool-io)

* [MDN - Funções](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions)

* [O Poder das JavaScript Functions](http://programadorobjetivo.co/javascript-functions/)

* [Funções em JavaScript](https://braziljs.org/blog/funcoes-em-javascript/)

* [Idiomatic.js](https://github.com/rwaldron/idiomatic.js/tree/master/translations/pt_BR)

* [JavaScript The Right Way](http://jstherightway.org/pt-br/)

* [MDN - Closures](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Closures)
