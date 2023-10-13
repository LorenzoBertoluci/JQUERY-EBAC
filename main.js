$(document).ready(function(){

	$('header button').click(function(){
		$('form').slidown();
	})

	$('botão-cancelar').click(function(){
		$('form').slideup();
	})

	$('form').on('submit', function(e){
		e.preventDefault();
		const enderecoNovaImagem =$('endereço-imagem-nova').val();
		const novoItem = $('<li></li>');
		$(`<img src="${enderecoNovaImagem}" />`).appendTo(novoItem);
		$(`
			<div class="overlay-imagem-link">
				<a href="${enderecoNovaImagem}" target="_blank" title= "ver imagem tamanhor real
				</a>
				</div>
		`).appendTo(novoItem);
		$(novoItem).appendTo('ul');
		$('#enderco-nova-imagem').val("")
	})
})