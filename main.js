// Utilizzare il DB del Basket già creato nell’esercizio
// precedente, per creare un’interfaccia grafica.
// Tutti i giocatori verranno visualizzati tramite il loro
// codice in una sidebar. Una volta cliccato sul codice
// giocatore, nel corpo principale verranno
// visualizzate le statistiche corrispondenti.
// Utilizzare jquery, handlebars e il DB del precedente
// esercizio

// creo un array vuoto
var giocatori = [];
//ciclo for per popolare l'array dei 100giocatori
for(var i = 1; i <= 100; i++) {
  var giocatore = {
    'giocatoreUnivoco': univoco(),
    'numeroPunti': getRandomNumber(1, 50),
    'numeroRimbalzi': getRandomNumber(1, 50),
    'falli': getRandomNumber(1, 10),
    'percentuale2punti': getRandomNumber(15, 90) + '%',
    'percentuale3punti': getRandomNumber(15, 90) + '%'
  };
  // console.log('giocatore ' + i + ' ' +giocatore);
  giocatori.push(giocatore);
}

console.log(giocatori);
// document.writeln('Player '+ giocatori[key]);
function getRandomNumber(min, max) {
  var newNumeroRandom = Math.floor(Math.random() * (max - min + 1) + min);
  return newNumeroRandom;
}
// creo una funzione che mi restituisca tre lettere maiuscole e tre numeri randomici
function univoco() {
  var gUnivoco = '';
  var lettere_list = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numeri_list = '0123456789';
  for(var i=0; i < 3; i++ ) {
  gUnivoco += lettere_list.charAt(Math.floor(Math.random() * lettere_list.length));
  }
  for(var i=0; i < 3; i++ ) {
  gUnivoco += numeri_list.charAt(Math.floor(Math.random() * numeri_list.length));
  }

  return gUnivoco;
}

// -------------------------------------------
for (var i = 0; i < giocatori.length; i++) {

  var casella = $('.template .casellaCodice').clone();

  console.log(casella);

  var codiceGiocatore = giocatori[i].giocatoreUnivoco;

  console.log(codiceGiocatore);

  casella.text(codiceGiocatore);

  $('.sidebar').append(casella);
}

$('.casellaCodice').click(function(){
  var thisCode = $(this).text();
  for (var i = 0; i < giocatori.length; i++) {
    var codiceGiocatore = giocatori[i].giocatoreUnivoco;
    if (thisCode == codiceGiocatore) {
      console.log(giocatori[i]);
      var source = $('#datiGiocatore').html();
      var template = Handlebars.compile(source);
      var context = {codice : giocatori[i].giocatoreUnivoco, rimbalzi : giocatori[i].numeroRimbalzi, punti : giocatori[i].numeroPunti, falli : giocatori[i].falli, percentuale2punti : giocatori[i].percentuale2punti, percentuale3punti : giocatori[i].percentuale3punti };
      var html = template(context);
      $('.mainGiocatore').html(html);
    }
  }
  
});
