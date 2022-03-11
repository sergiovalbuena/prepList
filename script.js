///PAR LEVELS

var iPico = 8;
var iOnionCilantro = 6;
var iCilantro = 2;
var iAvocado = 6;
var iPineapple = 2;
var iPickelOnion = 6;
var iFetaCheese = 4;
var iLettuce = 4;
var iCabagge = 2;
var iSalsaVerde = 6;
var iSalsaCruda = 6;
var iAnchoMiel = 2;
var iBCilantro = 1;
var iBOnion = 0.1;
var iLimes = 1;

var iMozza100 = 1; //4?
var iMozza150 = 1; //1??
var iMozza1l = 1; //1?
var iNachoCheese = 1; //1?

var iAnchoBottle = 3;
var iChipotle = 6;
var iCream = 6;
var iBeans = 3;
var iCajeta = 2;
var iPoblano = 2;
var iBotanera = 2;
var iTartara = 2;

var iChicken = 1;
var iPotato = 8;
var iTuna = 2; //1?
var iYam = 4;
var iCauli = 4;
var iFish = 6;
var iCabo = 4;
var iAsada = 4;

var iEggs = 12;
var iDiabloEggs = 6;
var iNoodle = 8;
var iBTaco = 8;
var iDry = 1;
var iPrapika = 1;
var iCinnamon = 1;
var iPlainCabbage = 1;
var iEncurtido = 1;
var iTortillaChips = 1;
var iNachos = 1;
var iHorchata = 1;
var iJamaica = 1;

///// PREP RECEPIES

var recPico = 1;
var recOnionCilantro = 2;
var recCilantro = 3;
var recAvocado = 2;
var recPineapple = 3; //heads
var recPickelOnion = 1; //Bucket
var recFetaCheese = 1; //PILE
var recLettuce = 4;
var recCabagge = 3;
var recSalsaVerde = 6;
var recSalsaCruda = 6;
var recAnchoMiel = 2;
var recBCilantro = 1;
var recBOnion = 0.5;
var recLimes = 1; //CTR

var recMozza100 = 1; //4?
var recMozza150 = 1; //1??
var recMozza1l = 6; //1?
var recNachoCheese = 1; //1?

var recAnchoBottle = 3;
var recChipotle = 8;
var recCream = 4;
var recBeans = 3;
var recCajeta = 2;
var recPoblano = 2;
var recBotanera = 2;
var recTartara = 2;

var recChicken = 1;
var recPotato = 8;
var recTuna = 4; //1?
var recYam = 2;
var recCauli = 2;
var recFish = 3;
var recCabo = 2;
var recAsada = 4;

var recEggs = 12;
var recDiabloEggs = 6;
var recNoodle = 8;
var recBTaco = 8;
var recDry = 3;
var recPrapika = 1;
var recCinnamon = 1;
var recPlainCabbage = 1;
var recEncurtido = 1;
var recTortillaChips = 1;
var recNachos = 1;
var recHorchata = 1;
var recJamaica = 1;

function calcProduct(idealProducto, actualProducto) {
  return idealProducto - actualProducto;
}

//printing result innerHTML
function eachOne(idName, ideal, idResult, pName) {
  var input = document.getElementById(idName);
  var value = input.value;
  var result = calcProduct(ideal, value);
  document.getElementById(idResult).innerHTML = `${result} rc of ${pName} `;
}
function calc() {
  eachOne("picoDeGallo", iPico, "rPicoDeGallo", "Pico de Gallo");
  eachOne("onionCilantro", iOnionCilantro, "rOnionCilantro", "Onion Cilantro");
  eachOne("cilantro", iCilantro, "rCilantro", "Cilantro");
  eachOne("avocado", iAvocado, "rAvocado", "Avocado");
  eachOne("pineapple", iPineapple, "rPineapple", "Pineapple");
  eachOne("pickledOnion", iPickelOnion, "rPickelOnion", "Pickel Onion");
  eachOne("fetaCheese", iFetaCheese, "rFetaCheese", "Feta Cheese");
  eachOne("lettuce", iLettuce, "rLettuce", "Chopped Lettuce");
  eachOne("cabagge", iCabagge, "rCabbage", "Cabagge Slaw");
  eachOne("salsaVerde", iSalsaVerde, "rSalsaVerde", "Salsa Verde");
  eachOne("salsaCruda", iSalsaCruda, "rSalsaCruda", "Salsa Cruda");
  eachOne("anchoMiel", iAnchoMiel, "rAnchoMiel", "Ancho Miel");
  eachOne("birriamenCilantro", iBCilantro, "rBCilantro", "Birriamen Cilantro");
  eachOne("birriamenOnion", iBOnion, "rBOnion", "Birriamen Onion");

  eachOne("mozza100", iMozza100, "rM100", "Mozzarella 100gr");
  eachOne("mozza150", iMozza150, "rM150", "Mozzarella 150gr");
  eachOne("mozza1l", iMozza1l, "rM1l", "Mozza 1Lt");
  eachOne("nachoCheese", iNachoCheese, "rNachoCheese", "Nacho Cheese");

  eachOne("anchoBottle", iAnchoBottle, "rAnchoBottle", "Ancho Miel Bottle");
  eachOne("chipotle", iChipotle, "rChipotle", "Chipotle");
  eachOne("cream", iCream, "rCream", "Sour Cream");
  eachOne("beans", iBeans, "rBeans", "Beans Paste");
  eachOne("cajeta", iCajeta, "rCajeta", "Cajeta");

  eachOne("chicken", iChicken, "rChicken", "Chicken");
  eachOne("potato", iPotato, "rPotato", "Potato Tots");
  eachOne("tuna", iTuna, "rTuna", "Tuna");
  eachOne("yam", iYam, "rYam", "Yam");
  eachOne("cauli", iCauli, "rCauli", "Cauliflower");
  eachOne("fish", iFish, "rFish", "Baja Fish");
  eachOne("cabo", iCabo, "rCabo", "Cabo Shrimp");
  eachOne("asada", iAsada, "rAsada", "Asada");

  eachOne("eggs", iEggs, "rEggs", "Poached Eggs");
  eachOne("dryOnion", iDry, "rDry", "Dry Onion and cabagge");
  eachOne("paprika", iPrapika, "rPaprika", "Paprika ans salt");
  eachOne("cinnamon", iCinnamon, "rCinnamon", "Cinnamon andSugar ");
  eachOne("plainCabbage", iPlainCabbage, "rPlainCabbage", "Plain Cabbage");
  eachOne("encurtido", iEncurtido, "rEncurtido", "Encurtido Chino ");
  eachOne("tortillaChips", iTortillaChips, "rTortillaChips", "Tortilla Chips");
  eachOne("nachos", iNachos, "rNachos", "Nachos ");
  eachOne("horchata", iHorchata, "rHorchata", "Horchata");
  eachOne("aguaJamaica", iJamaica, "rJamaica", "Agua de jamaica");
}

//MISANPLAS
function misanplas(idName, ideal, idResult, pName, unit, recProducto) {
  var input = document.getElementById(idName);
  var actualProducto = input.value;

  if (actualProducto === "") {
    document.getElementById(idResult).innerHTML = ``;
    document.getElementById(idResult).style.margin = "0px";
  } else if (actualProducto < ideal) {
    document.getElementById(
      idResult
    ).innerHTML = `Need ${recProducto} ${unit} of ${pName}`;
  }
}

function doMisanplas() {
  misanplas(
    "picoDeGallo",
    iPico,
    "rPicoDeGallo",
    "Pico de Gallo",
    "RC",
    recPico
  );
  misanplas(
    "onionCilantro",
    iOnionCilantro,
    "rOnionCilantro",
    "Onion Cilantro",
    "RC",
    recOnionCilantro
  );
  misanplas("cilantro", iCilantro, "rCilantro", "Cilantro", "RC", recCilantro);
  misanplas("avocado", iAvocado, "rAvocado", "Avocado", "RC", recAvocado);
  misanplas(
    "pineapple",
    iPineapple,
    "rPineapple",
    "Pineapple",
    "Heads",
    recPineapple
  );
  misanplas(
    "pickledOnion",
    iPickelOnion,
    "rPickelOnion",
    "Pickel Onion",
    "Buckets",
    recPickelOnion
  );
  misanplas(
    "fetaCheese",
    iFetaCheese,
    "rFetaCheese",
    "Feta Cheese",
    "Pile",
    recFetaCheese
  );
  misanplas(
    "lettuce",
    iLettuce,
    "rLettuce",
    "Chopped Lettuce",
    "Heads",
    recLettuce
  );
  misanplas("cabagge", iCabagge, "rCabbage", "Cabagge Slaw", "RC", recCabagge);
  misanplas(
    "salsaVerde",
    iSalsaVerde,
    "rSalsaVerde",
    "Salsa Verde",
    "Bags",
    recSalsaVerde
  );
  misanplas(
    "salsaCruda",
    iSalsaCruda,
    "rSalsaCruda",
    "Salsa Cruda",
    "Bags",
    recSalsaCruda
  );
  misanplas(
    "anchoMiel",
    iAnchoMiel,
    "rAnchoMiel",
    "Ancho Miel",
    "LT",
    recAnchoMiel
  );
  misanplas(
    "birriamenCilantro",
    iBCilantro,
    "rBCilantro",
    "Birriamen Cilantro",
    "LT",
    recBCilantro
  );
  misanplas(
    "birriamenOnion",
    iBOnion,
    "rBOnion",
    "Birriamen Onion",
    "LT",
    recBOnion
  );

  misanplas(
    "mozza100",
    iMozza100,
    "rM100",
    "Mozzarella 100gr",
    "RC",
    recMozza100
  );
  misanplas(
    "mozza150",
    iMozza150,
    "rM150",
    "Mozzarella 150gr",
    "RC",
    recMozza150
  );
  misanplas("mozza1l", iMozza1l, "rM1l", "Mozza 1Lt", "LT", recMozza1l);
  misanplas(
    "nachoCheese",
    iNachoCheese,
    "rNachoCheese",
    "Nacho Cheese",
    "RC",
    recNachoCheese
  );

  misanplas(
    "anchoBottle",
    iAnchoBottle,
    "rAnchoBottle",
    "Ancho Miel Bottle",
    "Bottles",
    recAnchoBottle
  );
  misanplas(
    "chipotle",
    iChipotle,
    "rChipotle",
    "Chipotle",
    "Bottles",
    recChipotle
  );
  misanplas("cream", iCream, "rCream", "Sour Cream", "Bottles", recCream);
  misanplas("beans", iBeans, "rBeans", "Beans Paste", "Bottles", recBeans);
  misanplas("cajeta", iCajeta, "rCajeta", "Cajeta", "Bottles", recCajeta);

  misanplas("chicken", iChicken, "rChicken", "Chicken", "BOX", recChicken);
  misanplas("potato", iPotato, "rPotato", "Potato Tots", "RC", recPotato);
  misanplas("tuna", iTuna, "rTuna", "Tuna", "loan", recTuna);
  misanplas("yam", iYam, "rYam", "Yam", "Box", recYam);
  misanplas("cauli", iCauli, "rCauli", "Cauliflower", "Box", recCauli);
  misanplas("fish", iFish, "rFish", "Baja Fish", "Box", recFish);
  misanplas("cabo", iCabo, "rCabo", "Cabo Shrimp", "Box", recCabo);
  misanplas("asada", iAsada, "rAsada", "Asada", "Box", recAsada);

  misanplas("eggs", iEggs, "rEggs", "Poached Eggs", "eggs", recEggs);
  misanplas("dryOnion", iDry, "rDry", "Dry Onion and cabagge", "RC", recDry);
  misanplas(
    "paprika",
    iPrapika,
    "rPaprika",
    "Paprika ans salt",
    "LT",
    recPrapika
  );
  misanplas(
    "cinnamon",
    iCinnamon,
    "rCinnamon",
    "Cinnamon andSugar",
    "LT",
    recCinnamon
  );
  misanplas(
    "plainCabbage",
    iPlainCabbage,
    "rPlainCabbage",
    "Plain Cabbage",
    "LT",
    recPlainCabbage
  );
  misanplas(
    "encurtido",
    iEncurtido,
    "rEncurtido",
    "Encurtido Chino ",
    "LT",
    recEncurtido
  );
  misanplas(
    "tortillaChips",
    iTortillaChips,
    "rTortillaChips",
    "Tortilla Chips",
    "Box",
    recTortillaChips
  );
  misanplas("nachos", iNachos, "rNachos", "Nachos", "Box", recNachos);
  misanplas(
    "horchata",
    iHorchata,
    "rHorchata",
    "Horchata",
    "Jars",
    recHorchata
  );
  misanplas(
    "aguaJamaica",
    iJamaica,
    "rJamaica",
    "Agua de jamaica",
    "Jars",
    recJamaica
  );
}

document.getElementById("calcPrep").addEventListener("click", doMisanplas());
