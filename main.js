$(document).ready(function(){

	$('header button').click(function(){
		$('form').slidown();
	})

	$('#botao-cancelar').click(function(){
		$('form').slideup();
	})

	$('form').on('submit',function(e){
		e.preventDefault();
		const enderecoDaNovaImagem = $("#endereco-imagem-nova").val();
		const NovoItem= $('<li style="display:none"></li>');
		$(`<img src= "${enderecoDaNovaImagem}" />`).appendTo(NovoItem)
		$(`
		<div class="overlay-imagem-link" >
			<a href="${enderecoDaNovaImagem}" title="Ver imagem tamanho real" target="_blank" 
				Ver imagem em tamanho real
			</a>
		</div>`).appendTo(NovoItem)
		$(NovoItem).appendTo('ul');
		$(NovoItem).fadeIn(1000);
		$("#endereco-imagem-nova").val('');
	})

})