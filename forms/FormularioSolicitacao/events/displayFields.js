function displayFields(form, customHTML) {

    var atividade = getValue("WKNumState");

    if (atividade == 0) {

    	form.setEnabled("solicitanteNome", true);
        form.setEnabled("solicitanteEmail", true);
        form.setEnabled("solicitanteTelefone", true);
        form.setEnabled("solicitanteCep", true);
        form.setEnabled("solicitanteLogradouro", true);
        form.setEnabled("solicitanteBairro", true);
        form.setEnabled("SolicitanteNumeroLogradouro", true);
        form.setEnabled("despesaTipo", true);
        form.setEnabled("DespesaValor", true);
        form.setEnabled("despesaData", true);

        form.setEnabled("autorizacaoResponsavel", false);
        form.setEnabled("isAutorizado", false);
        form.setEnabled("autorizacaoData", false);
    }

    else if (atividade == 1) {

        form.setEnabled("solicitanteNome", false);
        form.setEnabled("solicitanteEmail", false);
        form.setEnabled("solicitanteTelefone", false);
        form.setEnabled("solicitanteCep", false);
        form.setEnabled("solicitanteLogradouro", false);
        form.setEnabled("solicitanteBairro", false);
        form.setEnabled("SolicitanteNumeroLogradouro", false);
        form.setEnabled("despesaTipo", false);
        form.setEnabled("DespesaValor", false);
        form.setEnabled("despesaData", false);

        form.setEnabled("autorizacaoResponsavel", true);
        form.setEnabled("isAutorizado", true);
        form.setEnabled("autorizacaoData", true);
    }
}    