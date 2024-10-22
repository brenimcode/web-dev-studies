/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    
    return function() {
        return n++;
    };
    
};


 const counter = createCounter(10)
 console.log(counter()) // 10 
 console.log(counter()) // 11
 console.log(counter()) // 12


 /*

**Closure**:

Quando você faz a chamada:

const counter = createCounter(10);


Aqui estamos criando uma **closure**. A função `createCounter(10)` retorna uma função interna que "lembra" 
do contexto da função externa, ou seja, **mantém o acesso à variável `n`**, que foi passada como argumento.

A variável `n` foi inicializada com o valor **10**, e esse valor está preservado dentro do contexto da função interna.
 Mesmo após a execução de `createCounter`, a função retornada ainda tem acesso a esse valor de `n`.

Agora, `counter` se tornou:

counter = function() {
    return n++;
};


Isso significa que a variável **`counter`** agora é essa função interna que foi retornada. 
Quando você chama `counter()`, a função acessa o valor de `n` e:

1. **Mostra o valor atual de `n`**.
2. **Incrementa o valor de `n`** logo depois.

Então, ao executar `counter()`:

- O valor atual de `n` é retornado.
- O valor de `n` é incrementado internamente no contexto da closure.

### Exemplo de execução:
```javascript
console.log(counter()); // 10 -> Retorna o valor atual de `n` (10) e incrementa `n` para 11.
console.log(counter()); // 11 -> Retorna o valor atual de `n` (11) e incrementa `n` para 12.
```

 */