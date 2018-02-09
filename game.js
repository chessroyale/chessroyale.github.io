$(document).ready(function(){
	//$('.square').on('click', function(){
	//	console.log($('.square').attr('id'));
	//})

	var savedSquare;
	var savedPiece;

	$(".square").click(function(e){
   		e.preventDefault();
   		e.stopPropagation();
   		var selectedAlpha = '#' + $(this)[0].id;
   		var selected = $(selectedAlpha)[0];
   		console.log(selected);
   		
   		if (savedSquare == undefined) {
   			if ( $(selected).children().length == 0 ) {
   				console.log('Seleccioná una pieza');
   			} else {
   				console.log('Tiene pieza');
   				if (savedPiece == undefined){
   					savedSquare = $(selected)[0];
   					savedPiece = $(selected).children()[0];
   					console.log(savedSquare);
   					console.log(savedPiece);
   				}
   			}
   		} else {
   			if ($(selected) == savedSquare) {
   				console.log('Estás marcando la misma casilla');
   			} else {
   				if ( $(selected).children().length > 0 ) {
   				console.log('Tiene pieza');
   				if (savedPiece == undefined){
   					savedPiece = $(selected).children()[0];
   					console.log(savedPiece);
   				}
   			}
   			}
   			
   		}

   		//Check if Have Piece
   		

	});


})


	/*3 si es casilla valida, chequea si no hay casilla guardada, o sea, var casillaGuardada == null o undefined
	4 si no hay casilla guardada, es la primera vez, ergo tenes que clickear una casilla con pieza, si no, da error
	5 si clickeaste con pieza, chequea que no haya pieza guardada, o sea, var piezaGUardada...
	6 ahi vuelve al principio
	7 si tenes casillaGUardada, checkea que no clickeas la misma, o sea, casillaClickeada != casillaGUardada
  8 si es distinta, chequea si tenes pieza guardada. si no tenes pieza guardada, chequea si tiene pieza, si no tiene, error
  9 si tiene pieza, levanta la pieza y la guarda
  10 si es distinta y tenes pieza guardada y no tiene pieza, remove pieza de casilla guardada, append pieza a casilla nueva, 
  limpiar piezaGUardada, limpiar casillaGuardada*/