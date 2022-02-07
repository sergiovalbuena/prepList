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

<<<<<<< HEAD
=======
function eachOne(idName, ideal, idResult){
    var input = document.getElementById(idName);
    var value = input.value;
    var result = calcProduct(ideal, value)
    document.getElementById(idResult).innerHTML = `${result} rc of cada producto `
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
function pineapple(){
    const inputPineapple = document.getElementById('cilantro');
    const valuePineapple = inputPineapple.value;
    const cantidad = calcProduct(iPineapple, valuePineapple);
    document.getElementById('rPineapple').innerHTML = `${cantidad} rc of Pineapple`;
}
function pickeldOnion(){
    const inputickledOnion = document.getElementById('cilantro');
    const valuePickledOnion = inputickledOnion.value;
    const cantidad = calcProduct(iPickelOnion, valuePickledOnion);
    document.getElementById('rPickelOnion').innerHTML = `${cantidad} rc of Pickle Onion`;
}
function fetaCheese(){
    const inputFC = document.getElementById('fetaCheese');
    const valueFC = inputFC.value;
    const cantidad = calcProduct(iFetaCheese, valueFC);
    document.getElementById('rFetaCheese').innerHTML =`${cantidad} piles of Feta Cheese`; 
}
function lettuce(){
    const inputLettuce = document.getElementById('lettuce');
    const valueLettuce = inputLettuce.value;
    const cantidad = calcProduct(iLettuce, valueLettuce);
    document.getElementById('rLettuce').innerHTML =`${cantidad} heads of Lettuce`; 
}
function cabagge(){
    const inputCabagge = document.getElementById('cabagge');
    const valueCabbage = inputCabagge.value;
    const cantidad = calcProduct(iCabagge, valueCabbage);
    document.getElementById('rCabbage').innerHTML =`${cantidad} heads of Cabbage`; 
}
>>>>>>> refs/remotes/origin/main

function eachOne(idName, ideal, idResult, pName){
    var input = document.getElementById(idName);
    var value = input.value;
    var result = calcProduct(ideal, value)
    document.getElementById(idResult).innerHTML = `${result} rc of ${pName} `
}


function calc(){
<<<<<<< HEAD
=======
    pico();
    onionCilantro();
    cilantro();
    avocado();
    pineapple();
    pickeldOnion();
    fetaCheese();
    lettuce();
    cabagge();
    eachOne('picoDeGallo', iPico, 'rPicoDeGallo');
>>>>>>> refs/remotes/origin/main

    eachOne('picoDeGallo', iPico, 'rPicoDeGallo', 'Pico de Gallo');
    eachOne('onionCilantro', iOnionCilantro, 'rOnionCilantro', 'Onion Cilantro');
    eachOne('cilantro', iCilantro, 'rCilantro', 'Cilantro');
    eachOne('avocado', iAvocado, 'rAvocado', 'Avocado');
    eachOne('pineapple', iPineapple, 'rPineapple', 'Pineapple');
    eachOne('pickledOnion', iPickelOnion, 'rPickelOnion', 'Pickel Onion');
    eachOne('fetaCheese', iFetaCheese, 'rFetaCheese', 'Feta Cheese');
    eachOne('lettuce', iLettuce, 'rLettuce', 'Chopped Lettuce');
    eachOne('cabagge', iCabagge, 'rCabbage', 'Cabagge Slaw');
    eachOne('salsaVerde', iSalsaVerde, 'rSalsaVerde', 'Salsa Verde');
    eachOne('salsaCruda', iSalsaCruda, 'rSalsaCruda', 'Salsa Cruda');
    eachOne('anchoMiel', iAnchoMiel, 'rAnchoMiel', 'Ancho Miel');
    eachOne('birriamenCilantro', iBCilantro, 'rBCilantro', 'Birriamen Cilantro');
    eachOne('birriamenOnion', iBOnion, 'rBOnion', 'Birriamen Onion'); 

    eachOne('mozza100', iMozza100, 'rM100', 'Mozzarella 100gr');
    eachOne('mozza150', iMozza150, 'rM150', 'Mozzarella 150gr');
    eachOne('mozza1l', iMozza1l, 'rM1l', 'Mozza 1Lt')
    eachOne('nachoCheese', iNachoCheese, 'rNachoCheese', 'Nacho Cheese');

    eachOne('anchoBottle', iAnchoBottle, 'rAnchoBottle', 'Ancho Miel Bottle');
    eachOne('chipotle', iChipotle, 'rChipotle', 'Chipotle');
    eachOne('cream', iCream, 'rCream', 'Sour Cream');
    eachOne('beans', iBeans, 'rBeans', 'Beans Paste');
    eachOne('cajeta', iCajeta, 'rCajeta', 'Cajeta');

    eachOne('chicken', iChicken, 'rChicken', 'Chicken');
    eachOne('potato', iPotato, 'rPotato', 'Potato Tots');
    eachOne('tuna', iTuna, 'rTuna', 'Tuna');
    eachOne('yam', iYam, 'rYam', 'Yam');
    eachOne('cauli'. iCauli, 'rCauli', 'Cauliflower')
    eachOne('fish', iFish, 'rFish', 'Baja Fish');
    eachOne('Cabo', iCabo, 'rCabo', 'Cabo Shrimp');
    eachOne('asada', iAsada, 'rAsada', 'Asada');

    eachOne('eggs', iEggs, 'rEggs', 'Poached Eggs');
    eachOne('dryOnion', iDry, 'rDry', 'Dry Onion and cabagge');
    eachOne('paprika', iPrapika, 'rPaprika', 'Paprika ans salt');
    eachOne('cinnamon', iCinnamon, 'rCinnamon', 'Cinnamon andSugar ');
    eachOne('plainCabbage', iPlainCabbage, 'rPlainCabbage', 'Plain Cabbage');
    eachOne('encurtido', iEncurtido, 'rEncurtido', 'Encurtido Chino ');
    eachOne('tortillaChips', iTortillaChips, 'rTortillaChips', 'Tortilla Chips');
    eachOne('nachos', iNachos, 'rNachos', 'Nachos ');
    eachOne('horchata', iHorchata, 'rHorchata', 'Horchata');
    eachOne('jamaica', iJamaica, 'rJamaica', 'Agua de jamaica');
    
    
    
    
}