function fatorial(a){
    if(a < 0) return false;
    if(a == 1 || a == 0) return a;
    return a*fatorial(a-1);
}

function fib(a){
    if(a <= 2) return 1;
    return fib(a-1) + fib(a-2);
}

let func = fatorial(5);
function alertaFuncao(){
    alert(func);
}

func = fib(4);

function alertaFuncao1(){
    alert(func);
}
