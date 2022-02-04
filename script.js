var iPico = 5;
var iOnionCilantro = 6;
var iCilantro = 4;
var iAvocado = 10;
var iPineapple = 3;
var iPickelOnion = 6;
var iFetaCheese = 6;
var iLettuce = 3;
var iCabagge = 4;
var iSalsaVerde = 8;
var iSalsaCruda = 8;
var iAnchoMiel = 2;
var iBCilantro = 1;
var iBOnion = 1;

var iMozza100 = 1;
var iMozza150 = 1;
var iMozza1l = 1;
var iNachoCheese = 1;

var iAnchoBottle = 2;
var iChipotle = 6; 
var iCream = 6;
var iBeans = 4; 
var iCajeta = 4;

var iChicken = 1;
var iPotato = 1;
var iTuna = 2;
var iYam = 3;
var iCauli = 3;
var iFish = 3;
var iCabo = 4; 
var iAsada = 4;

var iEggs = 12;
var iDry = 1;
var iPrapika = 1;
var iCinnamon = 1; 
var iPlainCabbage = 1;
var iEncurtido = 1; 
var iTortillaChips = 1;
var iNachos = 1;
var iHorchata = 1;
var iJamaica =1;

function calcProduct(idealProducto, actualProducto){
    return idealProducto - actualProducto ;
}

function pico(){
    const inputPico = document.getElementById('picoDeGallo');
    const value = inputPico.value;
    const cantidadPico = calcProduct(iPico, value);
    document.getElementById('rPicoDeGallo').innerHTML = `${cantidadPico} rc of Pico de Gallo`;
}
function onionCilantro(){
    const inputOnionCilantro = document.getElementById('onionCilantro');
    const value = inputOnionCilantro.value;
    const cantidad = calcProduct(iOnionCilantro, value);
    document.getElementById('rOnionCilantro').innerHTML = `${cantidad} rc of Onion Cilantro`;
}
function cilantro(){
    const inputCilantro = document.getElementById('cilantro');
    const valueCilantro = inputCilantro.value;
    const cantidad = calcProduct(iCilantro, valueCilantro);
    document.getElementById('rCilantro').innerHTML = `${cantidad} rc of Cilantro`;
}
function avocado(){
    const inputAvocado = document.getElementById('cilantro');
    const valueAvocado = inputAvocado.value;
    const cantidad = calcProduct(iAvocado, valueAvocado);
    document.getElementById('rAvocado').innerHTML = `${cantidad} rc of Avocado`;
}





function calc(){
    pico();
    onionCilantro();
    cilantro();
    avocado();

}