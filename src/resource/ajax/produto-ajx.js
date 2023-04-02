function Excluir() {

    let id_excluir_pt = $("#id_altexcluir").val();

    $.ajax({
        type: 'POST',
        url: BASE_URL_AJAX("Produto-dataview"),
        data: {
            btnexcluir: 'ajx',
            id_altexcluir: id_excluir_pt
        },
        success: function (ret) {
            $("#excluir").modal("hide");

            if (ret == 1) {
                MensagemSucesso();
                ConsultarProdutoAJX();

            } else {
                MensagemErro();
            }
        }
    })
    return false;
}

function ConsultarProdutoAJX(){

    $.ajax({
        type: 'post',
        url: BASE_URL_AJAX("Produto-dataview"),
        data: {
            ConsultarProdutoAJX: 'ajx'
        },
        success: function(tabela_preenchida){
            $("#tabela_render").html(tabela_preenchida);
        }
    })
}