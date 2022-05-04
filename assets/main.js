function mostraConteudoCep(endereco) {

    $.ajax({
        url: 'conteudo.html',
        success:  (dados) => {

            $('#conteudo').html(dados);
            $('#cep').val(endereco.cep);
            $('#cidade').val(endereco.localidade);
            $('#bairro').val(endereco.bairro);
            $('#rua').val(endereco.logradouro);
            $('#ddd').val(endereco.ddd);
            $('#uf').val(endereco.uf);

            $('#newConsulta').click(() => location.reload());
        }
    });
    
}

$('#consulta').on('click', () => {
    
    let cep = $('#cep').val().replace(/\D/g, '');
    
    if (cep != '') {

        let validaCep = /^[0-9]{8}$/;

        if(validaCep.test(cep)) {
    
            $.getJSON(`https://viacep.com.br/ws/${cep}/json?callback=?`, function(dados) {

              if(!("erro" in dados)) {
                    let endereco = dados;
                    //console.log(endereco);

                    mostraConteudoCep(endereco);

                } else {
                    alert('CEP inválido!');
                }

            })

        } else {
            alert('Formato do CEP inválido');
        }

    } else {
         alert("CEP obrigatório!");
    } 

})




    



