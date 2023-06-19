/*for ([inicialização];[condição];[expressãofinal])
    declaração

for (variavel in object){

}

for(variavel of iteravel){

}
/

//for padrão
/for (let i = 0; i < 4; i++){
    console.log(i)
} /

//for in
/let obj = {a: 1, b: 2,c: 3};

for (let prop in obj){
    console.log("obj.", prop, " = ", obj[prop]);
} /


//for of
/let iterable = [
    {name: "Larissa", admin: false},
    {name: "Diego", admin: false},
    {name: "Walace", admin: false},
]; /

/for (const value of iterable){
    console.log(value.name)
} /

//if ou else if
//const a = 10
//const b = 5

/if (a < b){
    console.log('if: >> É verdadeiro')
} else if (a > b) {
    console.log('else if: >> É verdadeiro')
}
/

//else
/
if (a < b) {
    console.log('if: >> É verdadeiro')
} else if (a === b) {
    console.log('else if: >> É verdadeiro')
} else {
    console.log('else: >> É o falso')
}

ternario
const a = 10
const b = 5

console.log(a > 8 ? "Verdadeiro" : "Falso")
*/

//                         funções

function calculo(numero) => {
    return numero * numero;
}

console.log(calculo(2))
