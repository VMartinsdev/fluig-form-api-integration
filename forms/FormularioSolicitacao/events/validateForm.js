function validateForm(form){

	    var msg = "";
	    
	    /* SOLICITANTE */

	    if (form.getValue("solicitanteNome") == "") {
	        msg += "Informe o nome do solicitante.\n";
	    }

	    if (form.getValue("solicitanteEmail")  == "") {
	        msg += "Informe o e-mail do solicitante.\n";
	    }

	    if (form.getValue("solicitanteTelefone")  == "") {
	        msg += "Informe o telefone do solicitante.\n";
	    }

	    if (form.getValue("solicitanteCep")  == "") {
	        msg += "Informe o CEP.\n";
	    }

	    if (form.getValue("solicitanteLogradouro")  == "") {
	        msg += "Informe o logradouro.\n";
	    }

	    if (form.getValue("solicitanteBairro")  == "") {
	        msg += "Informe o bairro.\n";
	    }

	    if (form.getValue("SolicitanteNumeroLogradouro")  == "") {
	        msg += "Informe o número do endereço.\n";
	    }
	    
	    /* DESPESA */

	    if (form.getValue("despesaTipo")  == "") {
	        msg += "Informe o tipo de despesa.\n";
	    }

	    if (form.getValue("despesaValor")  == "") {
	        msg += "Informe o valor da despesa.\n";
	    } else if (parseFloat(form.getValue("despesaValor")) <= 0) {
	        msg += "O valor da despesa deve ser maior que zero.\n";
	    }

	    if (form.getValue("despesaData")  == "") {
	        msg += "Informe a data da despesa.\n";
	    }


	    /* AUTORIZAÇÃO */
	    
	    if (form.getValue("autorizacaoResponsavel")  == "") {
	        msg += "Informe o responsável pela autorização.\n";
	    }

	    if (form.getValue("isAutorizado")  == "") {
	        msg += "Informe se a solicitação foi aprovada.\n";
	    }

	    if (form.getValue("autorizacaoData")  == "") {
	        msg += "Informe a data da autorização.\n";
	    }

	    if (form.getValue("isAutorizado") == "false") {
	        if (form.getValue("autoriazacaoMotivoRecusa")  == "") {
	            msg += "Informe o motivo da recusa.\n";
	        }
	    }


	    if (msg != "") {
	        throw msg;
	    }
	}
	