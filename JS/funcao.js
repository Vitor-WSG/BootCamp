//FUNÇÃO SOMA
function soma(a,b){
    return a+b;
}
console.log(soma(3,5));


//FUNÇÃO MULTIPLICACAO
function multiplicacao (a,b,c){
    return a*b*c;
}
console.log(multiplicacao(3,3,3));


//FUNÇÃO COMPARATIVA
function comparativa(a,b){
    return a-b;
}
console.log(comparativa(2,3));


//FUNÇÃO SUPER SOMA
function supersoma(de, ate){
    var sum=0;
    for (var i= de; i<= ate; i++){
        sum+=i;
    }
    return sum
}
console.log(supersoma(1,3));
console.log(supersoma(4,6));
console.log(supersoma(5,7));
