const elementoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement;
elementoFormulario.addEventListener("submit", function (event) {
    event.preventDefault();

    if(!elementoFormulario.checkValidity()){
        alert(`Por favor, preencha todos os campos da transacao.`);
        return;
    }

    const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao") as HTMLSelectElement;
    const inputVAlor = elementoFormulario.querySelector("#valor") as HTMLInputElement;
    const inputData = elementoFormulario.querySelector("#Data") as HTMLInputElement;

    let tipoTransacao : TipoTransacao = inputTipoTransacao.value as TipoTransacao;
    let valor : number = inputVAlor.valueAsNumber;  
    let data : Date = new Date (inputData.value);

    if(tipoTransacao == TipoTransacao.DEPOSITO){
        saldo += valor;
    }else if(tipoTransacao == TipoTransacao.TRANSFERENCIA || tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO){
        saldo -= valor;
    }else{
        alert("Tipo de transação é inválida")
        return;
    }

    elementoSaldo.textContent = formatarMoeda(saldo);
    
    const novaTransacao : Transacao = {
        tipoTransacao : tipoTransacao,
        valor: valor,
        data: data,
    }
    console.log(novaTransacao);
    elementoFormulario.reset();
}
);