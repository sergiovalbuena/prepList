//CODIGO DEL CUADRADO
console.group("Cuadrados")
// const ladoCuadrado = 5;
// console.log("los lados del cuadrado miden:" + ladoCuadrado + "cm")


//const perimetroCuadrado = ladoCuadrado * 4;
function perimetroCuadrado(lado){
    return lado * 4;
} 
perimetroCuadrado()
//console.log("El perimetro del cuadrado es:" + perimetroCuadrado +"cm")

//const areaCuadrado = ladoCuadrado * ladoCuadrado;
function areaCuadrado(lado){
    return lado * lado;
}
//console.log("El area del cuadrado es:" + areaCuadrado +"cm2" )

console.groupEnd();

//CODIGO DEL TRIANGULO
/*
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.group("Triangulo")
console.log("los lados del triangulo miden:" + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm");
const alturaTriangulo = 5.5;
console.log("la altura del triangulo es de: " + alturaTriangulo + "cm")
const perimteroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("el perimetro de Triangulo es: " + perimteroTriangulo + "cm")
const areaTriangulo = (baseTriangulo * alturaTriangulo) /2;
console.log("el area del Triangulo es " + areaTriangulo + " cm 2")
*/

function perimetroTriangulo(lado1, lado2, base){
    return lado1+lado2+base;
}
function areaTriangulo(base, altura){
    return (base * altura)/2;
}

console.groupEnd();


 //CODIGO DEL CIRCULO: 
 console.group("Ciruclos");
//Radio
//const radioCirculo = 4;
//console.log("el radio del ciruclo es " + radioCirculo + "cm");
//Diametro
//const diametroCirculo = radioCirculo * 2;
//console.log("el diametro del ciruclo es " + diametroCirculo + "cm");
function diametroCirculo(radio){
    return radio * 2;
}
//Pi
//const Pi =  3.1415;
const Pi = Math.PI;
console.log("Pi es " + Pi + "cm");

//Circunferencia
//const perimetroCirculo = diametroCirculo * Pi;
//console.log("el perimetro del ciruclo es " + perimetroCirculo + "cm");
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * Pi;
}


//Area
//const areaCirculo = (radioCirculo * radioCirculo) * Pi;
//console.log("el area del ciruclo es " + area2Circulo + "cm");
function areaCirculo(radio) {
    return (radio * radio)*Pi;
}

 console.groupEnd();


 //CONECTAR CON EL HTML 
 function calcularPerimetroCuadrado(){
     const input = document.getElementById("inputCuadrado");
     const value = input.value;

     const perimetro = perimetroCuadrado(value);
     document.getElementById('resultPerimetro').innerHTML = `el perimetro es: ${perimetro}`;
 }
 
 
 function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);   
    document.getElementById('resultArea').innerHTML = `el area es: ${area}`;   

 }