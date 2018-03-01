
function adicionarClickParaPalavra(){
    pegaPalavras().forEach(function(valorAtual){
      eventoPalavras(valorAtual);
    });
}

function pegaPalavras(){
var listaPalavras= document.querySelectorAll("#wordtree_explicit svg g text");
var arrayPalavras=Array.from(listaPalavras);
	return arrayPalavras;
}


function eventoPalavras(palavra){
palavra.addEventListener("click" , function(event){
    event.preventDefault();
    event.stopImmediatePropagation();
    var elemento = event.target;
    var palavraClicada= elemento.textContent;
    $('html, body').animate({
        scrollTop: $(".planta").offset().top
    }, 1000);
    
    $("span").show();
});
}


